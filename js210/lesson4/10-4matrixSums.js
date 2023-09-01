function matrixSums(arr) {
  let newArr = [];
  arr.forEach(subArr => {
    newArr.push(subArr.reduce((sum, value) => sum + value, 0));
  });
  return newArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
