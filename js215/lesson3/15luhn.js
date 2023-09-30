/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.


========================

input
- string

output
- true or false

rules
- ignore all non-numeric characters
- to transform:
  - double the digit
  - if the digit >= 10, subtract 9
- empty strings?

approach
- replace all non-numeric characters with `''` (i.e., remove them)
- convert clean string to array of chars
- transform every other digit (starting from far R; far R is NOT transformed)
  - index 1, 3, 5 ... are transformed
- sum all digits in array
- check if sum is divisible by 10
  - if so, return true
  - else, return false
*/


let transformed = cleanStr => cleanStr
.split('')
.reverse()
.map((char, index) => {
  if (index % 2 !== 0) {
    return char * 2 > 9 ? char * 2 - 9 : char * 2;
  } else {
    return parseInt(char, 10);
  }
}).reduce((sum, num) => sum + num);


console.log(isValidLuhn('1111') === false);
console.log(isValidLuhn('8763') === true);
console.log(isValidLuhn('2323 2005 7766 3554') === true);
console.log(isValidLuhn('aj2323-2005.7766.3554') === true);
console.log(isValidLuhn('2837') === false); // 4867 => 25 => false
console.log(isValidLuhn('9697') === false); // 9697 => 31 => false
console.log(isValidLuhn('9696') === true); // 9696 => 30 => true

function isValidLuhn(string) {
  let cleanStr = string.replace(/[^0-9]/g, '');

  if (transformed(cleanStr) % 10 === 0) return true;
  else return false;
}



console.log('=================');
console.log(makeLuhn('2323 2005 7766 355') === '2323 2005 7766 3554');
console.log(makeLuhn('2323 2005 7766 3554') === '2323 2005 7766 3554');
console.log(makeLuhn('1111') === '11114');
console.log(makeLuhn('2324') === '23242');


function makeLuhn(string) {
  let cleanStr = string.replace(/[^0-9]/g, '');
  console.log(cleanStr);
  if (!isValidLuhn(cleanStr)) {
    let digit = 10 - transformed(cleanStr + '0') % 10;
    console.log(digit);
    return string + String(digit);
  } else {
    return string;
  }
}