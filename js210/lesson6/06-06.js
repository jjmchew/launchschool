/*
function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

*/
// CLASSIC SYNTAX

function product() {
  let numbers = [];
  [].forEach.call(arguments, num => numbers.push(num));
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
console.log(result);
