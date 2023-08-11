// Question 1, 2
/*
function average(a, b, c) {
  return sum(a, b, c) / 3;
}

console.log(average(1, 2, 3));
*/

// Question 2
/*
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(1, 2, 3));
*/

// Question 3, 4
function average(array) {
  return sum(array) / array.length;
}

console.log(average([1, 2, 3, 4, 5]));

// Question 4
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Question 5
let temperatures = [28, 21, 23, 22, 27, 31, 26, 18];
console.log(average(temperatures));
