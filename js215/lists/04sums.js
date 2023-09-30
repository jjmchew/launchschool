sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

function sumOfSums(array) {
  let arrays = [];
  array.forEach((_, index) => arrays.push(array.slice(0, index + 1)));
  console.log(arrays);
  let sum = (sum, num) => sum + num;
  let output = arrays.reduce((arraySum, array) => arraySum + array.reduce(sum), 0);
  console.log(output);
  return output;
}