function runningTotal(numbers) {
  let total = 0;
  let output = numbers.map(number => {
    total += number;
    return total;
  });
  console.log(output);
  return (output);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []


