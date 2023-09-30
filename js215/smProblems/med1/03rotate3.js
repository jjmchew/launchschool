/*
Take the number 735291 and rotate it by one digit to the left,
getting 352917. Next, keep the first digit fixed in place and
rotate the remaining digits to get 329175.
Keep the first two digits fixed in place and rotate again
to get 321759. Keep the first three digits fixed in place and
rotate again to get 321597. Finally, keep the first four digits
fixed in place and rotate the final two digits to get 321579.
The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and
returns the maximum rotation of that integer.
You can (and probably should) use the rotateRightmostDigits
function from the previous exercise.

Examples:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
*/

/*
elapsed:  14 mins


input
- a number

output
- a number that has been rotated the 'maximum rotation'

rules
- maximum rotation:
  - rotated the same number of times as (# of digits - 1)
  - with a decreasing number of digits rotated each time
  - i.e., 2 rotation, hold 1st digit from the L
- after rotations, drop leading zeros

data
- will work with strings - rotateRightmostDigits works on strings
  - can also slice, etc with strings

approach
- calculate digits.length by converting it to a string
- need to iterate index from digits.length to 2 number of times
  - call rotateRightmostDigits on number with n = index
- return rotatedNumber
*/

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15);
console.log(maxRotation(8703529146) === 7321609845);

function maxRotation(number) {
  let digitsLength = number.toString().length;
  let outputNum = number;
  for (let i = digitsLength; i >= 2; i -= 1) {
    outputNum = rotateRightmostDigits(outputNum, i);
  }
  console.log(outputNum);
  return outputNum;
}

function rotateRightmostDigits(digits, n) {
  let digitsArray = digits.toString().split('');
  let leftPart = digitsArray.slice(0, digitsArray.length - n);
  let rightPart = digitsArray.slice(digitsArray.length - n);
  return Number([...leftPart, ...rightPart.slice(1).concat(rightPart[0])].join(''));
}