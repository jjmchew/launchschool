// 2 pointers : start/end
// given a sorted array of numbers, find 2 numbers that add to the given target sum;  if such a pair of numbers does not exist, return null

function findTwoNumbers(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) return [nums[start], nums[end]];
    else if (sum > target) end -= 1;
    else if (sum < target) start += 1;
  }
  return null;
}

console.log(findTwoNumbers([1, 3, 6, 7, 8, 12], 14));
console.log(findTwoNumbers([2, 6, 8, 10], 20));