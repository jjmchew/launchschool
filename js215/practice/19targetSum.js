/*  

**UNSOLVED**

https://www.codewars.com/kata/64e68507cabf39dce8116872/train/javascript

Given an array of numbers and a target number, your task is to return an array of numbers which when summing them up equal to target number. You can pick numbers only from a given array, but you can take them as many times as you need. To not create different solutions you should always pick as big number as possible. Array of numbers will be sorted in descending order (bigger numbers come first, smaller numbers are in the end). If it is impossible to get to the target number, return an empty array.

Input
As arguments you will receive:
numbers: array of positive integers from 1 to 1 000, sorted in descending order.
target: number - positive integer from 1 to 100 000.
All inputs will be valid.

Output
Your function should return an array of integers from the input array that when summing equals to target number. Return an empty array when it is not possible.

Tests
Your function should pass 8 static tests plus 292 random tests. Total amount of tests is 300.

*/

/*
input
- numbers : array of numbers
           - sorted in descending order
- target : integer

output
- array of integers chosen from 'numbers' array that sum to 'target'

rules
- numbers in 'output' may only be chosen from 'numbers', but may be used more than once

approach
- generate all possible combos (incl. multiples) of numbers in an array, check for sums === target
  - start with max number of 

notes
- target must be sum of some multiples of 'numbers'
[100, 25, 15, 7, 3], 24
- 100 * 0
- 25 * 0
- 15 * 1
- 7 * 0
- 3 * 3

[100, 25, 15, 7, 3], 57
- 100 * 0
- 25 * 2
- 15 * 
- 7 * 1
- 3 * 

[100, 25, 15, 7, 3], 301
- 100 * 2
- 25 * 
- 15 * 
- 7 * 
- 3 * 
*/

const numbers = [100, 25, 15, 7, 3];
console.log(getNumbers(numbers, 24).toString() === [15,3,3,3].toString);

function getNumbers(numbers, target) {
  let sumOf = (sum, num) => sum + num;
  let addNum = (number, times) => {
    for (let i = 0; i < times; i += 1) {
      output.push(number);
    }
  };
  let runningTotal = (output) => {
    if (output.length === 0) return target;
    else return target - output.reduce(sumOf);
  }
  let output = [];
  for (let i = 0; i < numbers.length; i += 1) {
    let times = Math.floor((runningTotal(output)) / numbers[i]);
    addNum(numbers[i], times);
  }
  console.log(output);
  return output;
}