/*
Write a function that rotates the last n digits of a number.
For the rotation, rotate by one digit to the left, moving the first digit to the end.

Examples:
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
*/

/*
elapsed:  13 mins


input
- number 'digits' : containing digits to be rotated
- number 'n': containing the number of digits from the R to be rotated by 1 (to the L)

output
- number : with digits rotated based on input

rules
- only last 'n' digits of 'digits' are rotated
- assume no need to validate input

data structure
- will convert number to string, then an array of string digits

approach
- convert digit to strings, then split into array of string digits
- split the array into 2 parts: indexes 0 .. (length - n) (unchanged) & (length - n).. end (to be rotated)
- rotate the 2nd half
    - slice(1).concat(arr[0])
- recombine the unchanged part with the rotated part
- join back into a string
- explicitly coerce back to number and return

example
7 3 5 2 9 1,   4
length 6;  split at length - n : 2
slice(0, 2) (not inclusive), slice(2)

234,  2;  length - n = 1
slice(0, 1), slice(1)
*/

console.log(rotateRightmostDigits(234, 2) === 243);
console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);

function rotateRightmostDigits(digits, n) {
  let digitsArray = digits.toString().split('');
  let leftPart = digitsArray.slice(0, digitsArray.length - n);
  let rightPart = digitsArray.slice(digitsArray.length - n);
  let output = Number([...leftPart, ...rightPart.slice(1).concat(rightPart[0])].join(''));
  console.log(output);
  return output;
}