/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

========================

*/

console.log(cleanNumber('1234567890') === '1234567890');
console.log(cleanNumber('11234567890') === '1234567890');
console.log(cleanNumber('21234567890') === '0000000000');
console.log(cleanNumber('234567890') === '0000000000');
console.log(cleanNumber('ad234567890') === '0000000000');
console.log(cleanNumber('123-456-7890') === '1234567890');
console.log(cleanNumber('123.456.7890') === '1234567890');
console.log(cleanNumber('+123.456.7890') === '1234567890');
console.log(cleanNumber('+1 (123) 456 - 7890') === '1234567890');

function cleanNumber(string) {
  let cleanStr = string.replace(/[^0-9]/g, '');

  if (cleanStr.length < 10) return '0000000000';
  if (cleanStr.length > 10 && cleanStr[0] !== '1') return '0000000000';
  else if (cleanStr.length > 10 && cleanStr[0] === '1') {
    cleanStr = cleanStr.slice(1);
  }
  return cleanStr;
}