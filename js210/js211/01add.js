
function add(first, second) {
  return first + second;
}

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return add(firstNumber, secondNumber);
  };
}

let addFive = makeAdder(5);
let addTen = makeAdder(10);

console.log(addFive(5));
console.log(addTen(5));

// change add here

add = function add(first, second) {
  return first * second;
}

console.log(addFive(5));
console.log(addTen(5));

console.log(add(5, 5));
console.log(add(10, 5));

// question on partial function application
// https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745


