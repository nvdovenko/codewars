/**
 * The function format a duration, given as a number of seconds, into a human-friendly way.
 * It must accept a non-negative integer. If it is zero, it just returns "now".
 * Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
 *
 * Example:
 * For seconds = 62, this function should return
 *    "1 minute and 2 seconds"
 * For seconds = 3662, this function should return
 *    "1 hour, 1 minute and 2 seconds"
 */
function formatDuration(seconds) {
  if (seconds === '' || seconds === 0) return 'now';

  let years = Math.trunc(seconds / 31536000);
  let yearsRemainder = seconds - years * 31536000;

  let days = Math.trunc(yearsRemainder / 86400);
  let daysRemainder = yearsRemainder - days * 86400;

  let hours = Math.trunc(daysRemainder / 3600);
  let hoursRemainder = daysRemainder - hours * 3600;

  let minuts = Math.trunc(hoursRemainder / 60);
  let sec = hoursRemainder - minuts * 60;

  let result = '';
  let separator = ', ';

  if (years === 1) {
    result = result + '1 year';
  } else if (years > 1) {
    result = result + years + ' years';
  }

  if (hours === 0 && minuts === 0 && sec === 0) separator = ' and ';

  if (days === 1) {
    result = result === '' ? result + '1 day' : result + separator + 'day';
  } else if (days > 1) {
    result =
      result === ''
        ? result + days + ' days'
        : result + separator + days + ' days';
  }

  if (minuts === 0 && sec === 0) separator = ' and ';

  if (hours === 1) {
    result = result === '' ? result + '1 hour' : result + separator + '1 hour';
  } else if (hours > 1) {
    result =
      result === ''
        ? result + hours + ' hours'
        : result + separator + hours + ' hours';
  }

  if (sec === 0) separator = ' and ';

  if (minuts === 1) {
    result =
      result === '' ? result + '1 minute' : result + separator + '1 minute';
  } else if (minuts > 1) {
    result =
      result === ''
        ? result + minuts + ' minutes'
        : result + separator + minuts + ' minutes';
  }

  if (sec === 1) {
    result = result === '' ? result + '1 second' : result + ' and 1 second';
  } else if (sec > 1) {
    result =
      result === ''
        ? result + sec + ' seconds'
        : result + ' and ' + sec + ' seconds';
  }

  return result;
}
