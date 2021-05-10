import { format, parseJSON, parse, toDate, isValid } from 'date-fns';
import {
  DATEFNS_API_DATE_FORMAT,
  SHORT_DATETIME_STRING,
  SHORT_DATE_STRING
} from './date-format.constants';

/**
 * Format a JS date or JSON date string to the YYYY-MM-DD output format
 *
 * @param d Date (as JSON Date string or JS date object) to be converted
 */
export const GetStandardizedDateKeyForApi = (d: string | Date): string => {
  return typeof d == 'string'
    ? format(parseJSON(d), DATEFNS_API_DATE_FORMAT)
    : format(d, DATEFNS_API_DATE_FORMAT);
};

/**
 * Format date as short datetime: (e.g., Jan 21st, 6:49pm)
 *
 * @param d date as JS date
 */
export const AsShortDateTimeString = (d: Date): string => {
  return d ? format(parseJSON(d), SHORT_DATETIME_STRING) : null;
};

/**
 * Format date as short date: (e.g., Jan 21st, 2020)
 *
 * @param d date as JS date
 */
export const AsShortDateString = (d: Date): string => {
  return d ? format(parseJSON(d), SHORT_DATE_STRING) : null;
};

/**
 * Parse an API-formatted date string (e.g., 2018-12-28) to a JS date.
 * Reutrn null if the date format is not valid
 * @param d
 */
export const GetDateFromApiDateString = (d: string): Date => {
  return d ? parse(d, DATEFNS_API_DATE_FORMAT, new Date()) : null;
};

/**
 * Parse a JS date number to a formatted date string.
 * Reutrn empty string if the date format is not valid
 * @param d numeric (JS) date
 * @param fmt format string (if not provided, defaults to DATEFNS_API_DATE_FORMAT)
 */
export const GetFormattedDateStringFromJsDate = (
  d: number,
  fmt?: string
): string => {
  const parsed = d ? toDate(d) : null;

  if (parsed && isValid(parsed)) {
    const formatStr = fmt ?? DATEFNS_API_DATE_FORMAT;
    return format(parsed, formatStr);
  } else {
    return '';
  }
};
