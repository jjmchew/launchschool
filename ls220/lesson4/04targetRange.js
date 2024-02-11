// You are given a sorted array of integers in ascending order.
// Your task is to find the starting and ending positions of
// a given target value within the array.

// Implement a function findRange that takes in an array of integers
// "nums" and a target value "target". The function should return an array
// containing the starting and ending positions of the target value
// within the array. If the target value is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5], target = 3
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 3, 3, 3, 5, 6,], target = 4
// Output: [-1, -1]



// #region My attempt
// function findRange(array, target) {

//   function findStart() {
//     let left = 0
//     let right = array.length - 1
//     while (left <= right) {
//       mid = Math.floor((left + right) / 2)
//       if (array[mid] >= target) {
//         right = mid - 1
//       } else if (array[mid] < target) {
//         left = mid + 1;
//       }
//     }
//     return left;
//   }

//   function findEnd() {
//     let left = 0
//     let right = array.length - 1
//     while (left <= right) {
//       mid = Math.floor((left + right) / 2)
//       if (array[mid] <= target) {
//         left = mid + 1
//       } else if (array[mid] > target) {
//         right = mid - 1;
//       }
//     }
//     return right;
//   }

//   let start = findStart();
//   let end = findEnd();
//   if (start > end) return [-1, -1];
//   else return [start, end];
// }
// #endregion


// #region LS solution
function findRange(nums, target) {
  return [findLeftMostIndex(nums, target), findRightMostIndex(nums, target)];
}

function findLeftMostIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let currLeftMost = -1; // use this to keep track of the current leftMost index with desired target value
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      currLeftMost = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return currLeftMost;
}

function findRightMostIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let currRightMost = -1; // use this to keep track of the current rightMost value with desired target value
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      currRightMost = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return currRightMost;
}
// #endregion

console.log(findRange([1, 2, 3, 3, 3, 3, 3, 4, 5], 3)); // [2, 6]
console.log(findRange([1, 2, 3, 3, 3, 5, 6,], 4)); // [-1, -1]
console.log(findRange([3, 3, 3, 3, 3, 3,], 3)); // [0, 5]
console.log(findRange([3, 3, 3, 3, 3, 3,], 2)); // [-1, -1]