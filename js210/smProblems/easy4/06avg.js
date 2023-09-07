function showMultiplicativeAverage(array) {
  let avg = array.reduce((total, num) => total *= num, 1) / array.length;
  let output = avg.toFixed(3);
  console.log(output);
  return output; 
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
