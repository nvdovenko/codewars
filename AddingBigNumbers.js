/**
 * The function returns the sum of two numbers.
 * The input numbers are strings and the function must return a string.
 *
 * Example:
 * add("123", "321"); -> "444"
 * add("11", "99");   -> "110"
 */
function add(a, b) {
  let answer = '';
  let ans = 0;
  keepInMind = false;

  a = a.padStart(b.length, '0');
  b = b.padStart(a.length, '0');

  for (i = a.length - 1; i >= 0; i--) {
    ans = (keepInMind ? 1 : 0) + Number(a[i]) + Number(b[i]);
    keepInMind = false;

    if (ans > 9) {
      ans = ans - 10;
      keepInMind = true;
    }

    answer = answer.padStart(answer.length + 1, String(ans));
  }

  return keepInMind ? answer.padStart(answer.length + 1, '1') : answer;
}
