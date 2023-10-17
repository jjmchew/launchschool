// Problem 1
// Higher-order functions are functions that take a function as an argument, return a function (when invoked), or both.




// Problem 2
// let numbers = [1, 2, 3, 4];
// function checkEven(number) {
//   return number % 2 === 0;
// }

// numbers.filter(checkEven); // [2, 4]
// filter is a higher-order function since it takes a function (`checkEven` in this case) as an argument.
// `checkEven` is not a higher-order function - it takes a number as an argument and returns a boolean.



// Problem 3
// let numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   return function (number) {
//     return number % 2 === 0;
//   }
// }

// let checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven)); // [2, 4]




// Problem 4
// function execute(func, operand) {
//   console.log(func(operand));
//   return func(operand);
// }

// execute(function(number) {
//   return number * 2;
// }, 10); // 20

// execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy'); // "HEY THERE BUDDY"




// Problem 5
function makeListTransformer(func) {
  return function(args) {
    return args.map(func);
  };
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]