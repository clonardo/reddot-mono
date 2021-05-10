import { SanitizeError } from '@rdd/common-utils';
import { Logger } from '@nestjs/common';
import * as chalk from 'chalk';

/**
 * For brighter console.log colors: sets the background to the specified color
 */
export type LoudLoggingColors = 'bgGreen' | 'bgMagenta' | 'bgRed';

/**
 * Log a highly visible message to the console with a colored background (default to magenta)
 *
 * @param message the thing to log. Can be a scalar value, object, or array.
 * @param color optionally set specific color (as LoudLoggingColors- default: 'bgMagenta')
 */
export const LogLoudly = (
  message: any,
  color: LoudLoggingColors = 'bgMagenta'
): void => {
  const cleanMsg = SanitizeError(message, 'LogLoudly:: undefined message');
  try {
    console.info(chalk[color](cleanMsg));
  } catch {
    console.log(cleanMsg);
  } finally {
    chalk.reset();
  }
};

/**
 * Local copy of SanitizeError due to weird TypeScript import warning
 *
 * @param err Error object/string/whatever
 * @param fallbackText optionally override generic error text. Default: "An error has occurred"
 */
const sanitizeError = (
  err: any,
  fallbackText: string = 'An error has occurred'
): string => {
  const unknownError: string =
    fallbackText && fallbackText.length
      ? fallbackText
      : 'An error has occurred';
  if (err) {
    if (typeof err == 'string') {
      return err;
    } else if (typeof err == 'object') {
      if (err.displayMsg) {
        // handles IStreamingResponseFromServer
        return err.displayMsg;
      } else if (err.message) {
        console.log('error message: ', err.message);
        return err.message;
      } else {
        try {
          const stringified = JSON.stringify(err, null, 2);
          return stringified;
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
 * Get a function to log a message at the indicated level.
 * Optionally accepts a Nest logger instance
 *
 * @param messageLevel info, warn, or error
 * @param logger Logger instance (optional)
 */
export const GetLogger = (
  messageLevel: 'log' | 'warn' | 'error',
  logger?: Logger
): ((msg: string) => void) => {
  if (logger) {
    return (msg: string) => {
      logger[messageLevel](msg);
    };
  } else {
    return (msg: string) => {
      console[messageLevel](msg);
    };
  }
};

/**
 * When an error is caught: log the sanitized error and reject a promise.
 * Optionally accepts a Nest logger instance
 *
 * @param err error to sanitize + log
 * @param rejectCb promise reject callback function
 * @param logger Logger instance (optional)
 */
export const LogAndRejectWithGlobalLogger = (
  err: any,
  rejectCb: Function,
  logger?: Logger
): void => {
  const logFn = GetLogger('warn', logger);
  const msg = sanitizeError(err);
  logFn(msg);
  rejectCb(msg);
};

/**
 * Sugar to log an error and reject a promise.
 * Optionally accepts an async callback to try to run before rejecting (will time out after 10 seconds if one is provided)
 *
 * @param rejector "reject" callback for a promise
 * @param logger Logger instance
 * @param err error object
 * @param beforeReject optional async callback to execute before rejecting the promise.
 */
export const LogAndReject = async (
  rejector: (reason: any) => void,
  logger: Logger,
  err: any,
  beforeReject?: () => Promise<any>
): Promise<any> => {
  const END = () => {
    const msg = SanitizeError(err);
    logger.error(msg);
    rejector(msg);
  };
  if (beforeReject && typeof beforeReject == 'function') {
    let timeoutId;
    const timeoutPromise = new Promise<any>((_, reject) => {
      timeoutId = setTimeout(() => {
        END();
        reject(new Error('Request timed out'));
      }, 10000);
    });

    const executeThenReject = async () => {
      return new Promise<void>(async (rsv) => {
        let _rejected = false;
        try {
          await beforeReject();
          END();
          rsv();
        } catch {
          _rejected = true;
          END();
        } finally {
          if (_rejected) {
            END();
          }
        }
      });
    };
    try {
      return {
        promiseOrTimeout: Promise.race([executeThenReject, timeoutPromise]),
        timeoutId
      };
    } catch {
      END();
    }
  } else {
    END();
  }
};
