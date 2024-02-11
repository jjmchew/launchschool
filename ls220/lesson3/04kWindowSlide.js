// 2 pointers:  K-window slide
/*
- given an array of integers, and an integer k, what is the maximum sum of consecutive k elements in the array?
- if the array contains less than k elements, return `null`
- if the integer k is less than 1, return `null`
*/

function maxSum(nums, k) {
  if (k < 1 || nums.length < k) return null;

  let currentSum = 0;
  let maxSum = 0;
  let left = 0;
  let right = -1;

  while (right < k - 1) {
    right += 1;
    currentSum += nums[right];
  }
  
  maxSum = currentSum;
  while (right < nums.length - 1) {
    currentSum -= nums[left];
    left += 1;
    right += 1;
    currentSum += nums[right];
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

console.log(maxSum([1, 2, 3, 4, 5, 6], 4) === 18);
console.log(maxSum([1, 2, 3], 4) === null);
console.log(maxSum([1, 2, 3], 0) === null);