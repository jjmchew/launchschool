function average(array) {
  let output = Math.floor(array.reduce((sum, number) => sum += number, 0) / array.length);
  console.log(output);
  return output;
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
