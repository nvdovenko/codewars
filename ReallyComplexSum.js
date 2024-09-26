/**
 * Function receive an array of complex numbers represented as strings
 * and return the sum as a string.
 * Complex numbers can be written in the form of a+bi,
 * such as 2-3i where 2 is the real part, 3 is the imaginary part,
 * and i is the "imaginary unit". For simplicity, the coefficients will always be integers.
 * If the array is empty, return 0.
 *
 */
function complexSum(arr) {
  let real = '';
  let imagine = '';
  let r = 0;
  let i = 0;

  arr.forEach(element => {
    arrayOfParts = element.replace(/([-+])/g, ' $1').split(' ');
    arrayOfParts.forEach(el => {
      if (el != '' && el.indexOf('i') >= 0) {
        if (el === '-i') {
          i--;
        } else if (el === 'i' || el === '+i') {
          i++;
        } else {
          addI = Number(el.replace('i', ''));
          if (!isNaN(addI)) i += addI;
        }
      }
      if (el != '' && el.indexOf('i') < 0) r += Number(el);
    });
  });

  if (r === 0 && i === 0) return '0';

  if (r === 0) real = '';
  else real = String(r);

  if (i === 0) imagine = '';
  else if (i === 1 && r === 0) imagine = 'i';
  else if (i === 1 && r != 0) imagine = '+i';
  else if (i === -1) imagine = '-i';
  else if (i < 0) imagine = String(i) + 'i';
  else imagine = (r === 0 ? '' : '+') + String(i) + 'i';

  return real + imagine;
}
