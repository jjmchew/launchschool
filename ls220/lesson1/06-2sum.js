// Given a list of integers nums and a target integer,
// find two numbers in the list that add up to the target
// and return their indices.

// It is guaranteed that there is exactly one pair of numbers
// that satisfies the condition, and each number can only be
// used once in the pair.

// The order of the output array matters, and the index of the
// number that appears first should be the first one in the output array.

// Input: nums = [4, 2, 3, 9, 15, 5], target = 11
// Output: [1, 3]
// Explanation: Because nums[1] + nums[3] == 11, we return [1, 3].

/*
input
- array 'nums': of integers
- 'target': integer

output
- array 'output': of 2 numbers representing indexes from the input array

rules
- 'nums' contains exactly 1 pair of numbers that can add to 'target'
- 'output' should list lowest index first

approach
- iterate through "first num" using index 'i'
  - iterate index 'j' starting from 'i' + 1
    - check if number at 'i' + 'j' sum to 'target'
    - if so, push both indexes to 'output'

*/

// #region naive solution (my solution)
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// }
// time complexity:  O(N^2)
// space complexity: O(1)
// #endregion

// #region LS solution - using hash tables for O(N) time complexity
function twoSum(nums, target) {
  const numMap = {}; // (can use const since the obj won't be reassigned)

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i]; // (can use const for each iteration)
    if (numMap[complement]) return [numMap[complement], i]; // check for a number and retrieve it's index
    else numMap[nums[i]] = i; // store the number and it's index in a hash table
  }
}
// time complexity: O(N)  (for loop, hash lookup is O(1) time complexity)
// space complexity: O(N)
// #endregion

console.log(twoSum([4, 2, 3, 9, 15, 5], 11).toString() === '1,3');
console.log(twoSum([1, 2, 3], 5).toString() === '1,2');