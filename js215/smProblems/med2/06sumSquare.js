/*
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

Examples:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

*/

/*
elapsed:  9 mins


input
- integer 'inputNum' : positive integer

output
- integer : a calculated difference

rules
- A: sum all positive integers between 1 .. inputNum (inclusive), then square
- B: square each positive integer 1 .. input, sum all of the squares
- calculate A - B : return this answer

approach
- generate an array of numbers from 1 .. inputNum
  - 
- calc A:  use reduce to calculate sum of numbers and then square it
- calc B:  use map to square each element, then use reduce to sum this
- return A - B
*/


console.log(sumSquareDifference(3) === 22); //--> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) === 2640);
console.log(sumSquareDifference(1) === 0);
console.log(sumSquareDifference(100) === 25164150);

function sumSquareDifference(inputNum) {
  let nums = Array.from({length: inputNum}, (_, idx) => idx + 1);
  let a = nums.reduce((sum, num) => sum + num) ** 2;
  let b = nums.map(num => num ** 2).reduce((sum, num) => sum + num);
  return a - b;
}