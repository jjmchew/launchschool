buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(array2d) {
  let output = [];
  array2d.forEach(array => output = [...output, ...buy(array[0], array[1])]);
  console.log(output);
  return (output);
}

function buy(fruit, num) {
  let output = [];
  for (let i = 0; i < num; i += 1) {
    output.push(fruit);
  }
  return output;
}