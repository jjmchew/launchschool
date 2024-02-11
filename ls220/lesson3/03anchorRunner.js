// 2 pointers:  anchor/runner
// given an array of numbers with zeros and non-zeros, move all zeros to the end of the array while maintaining the relative order of non-zero elements
// if no 0s are present, no changes are required

// #region Anchor/Runner version
// function moveZeros(nums) {
//   let anchor = 0;
//   let runner = 0;
//   while (runner < nums.length) {
//     if (nums[runner] !== 0) {
//       [nums[anchor], nums[runner]] = [nums[runner], nums[anchor]];
//       anchor += 1;
//     }
//     runner += 1;
//   }
//   return nums;
// }
// #endregion



// #region Reader/Writer version
function moveZeros(nums) {
  let writer = 0;
  let reader = 0;

  while (reader < nums.length) {
    if (nums[reader] !== 0) {
      nums[writer] = nums[reader];
      writer += 1;
    }
    reader += 1;
  }

  for (let i = writer; i < nums.length; i += 1) {
    nums[i] = 0;
  }

  return nums;
}
// #endregion

console.log(moveZeros([0, 2, 0, 4, 8])); // [2, 4, 8, 0, 0]
