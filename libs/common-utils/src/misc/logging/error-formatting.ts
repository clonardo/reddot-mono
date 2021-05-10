/**
 * Truncate really long error messages
 *
 * @param str String to possibly truncate
 * @param maxChars max number of characters (default: 1024)
 */
const clampTo = (str: string, maxChars: number = 1024): string => {
  if (str && typeof str == 'string') {
    return str.length > maxChars ? str.substr(0, maxChars) : str;
  } else {
    return 'N/A';
  }
};

/**
 * Errors can come in many forms. Here, force them to be strings.
 * @param err Error object/string/whatever
 * @param fallbackText optionally override generic error text. Default: "An error has occurred"
 */
export const SanitizeError = (
  err: any,
  fallbackText: string = 'An error has occurred'
): string => {
  const unknownError: string =
    fallbackText && fallbackText.length
      ? fallbackText
      : 'An error has occurred';
  if (err) {
    if (typeof err == 'string') {
      return clampTo(err);
    } else if (typeof err == 'object') {
      if (err.displayMsg) {
        // handles IStreamingResponseFromServer
        return clampTo(err.displayMsg);
      } else if (err.message) {
        console.log('! error message: ', clampTo(err.message));
        return clampTo(err.message);
      } else {
        try {
          const stringified = JSON.stringify(err, null, 2);
          return clampTo(stringified);
        } catch (e) {
          return unknownError;
        }
      }
    } else {
      return unknownError;
    }
  } else {
    return unknownError;
  }
};

/**
 * Across microservice boundaries, rejections are described with messages like "Request failed with status code 409".
 * Extract the http error status code from the message, or return a default
 *
 * @param err Error object/string/whatever
 * @param fallbackErrorCode optionally override generic error text. Default: "500"
 */
export const ExtractHttpExceptionCode = (
  err: any,
  fallbackErrorCode: number = 500
): number => {
  /**
   * Extract error code with regex
   *
   * @param str Input string
   */
  const doExtract = (str: string): number => {
    const rgx = /^Request\sfailed\swith\sstatus\scode\s(\d\d\d)/i;
    const res = rgx.exec(str);
    if (res && res[1]) {
      return +res[1];
    } else {
      return fallbackErrorCode;
    }
  };
  if (err) {
    if (typeof err == 'string') {
      return doExtract(err);
    } else {
      const sanitized = SanitizeError(err);
      if (sanitized && sanitized.length) {
        return doExtract(sanitized);
      } else {
        return fallbackErrorCode;
      }
    }
  } else {
    return fallbackErrorCode;
  }
};
