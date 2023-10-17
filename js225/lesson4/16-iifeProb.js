// Problem 1
// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();
// this code will not execute - SyntaxError - needs brackets around function declaration



// Problem 2
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// })();



// Problem 3
// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?
// sum can't be used for a variable name and also a function name (both are variables)

// Fixed using IIFE
// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// sum += (function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);  // ?

// console.log(sum);



// Problem 4
// function countdown(num) {
//   return (function() {
//     for (let i = num; i >= 0; i -= 1) {
//       console.log(i);
//     }
//     console.log('Done!');
//   })();
// }

// countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!



// Problem 5
// (function foo() {
//   console.log('Bar');
// })();

// foo() // ?
// NO - `foo` is not accessible in the global scope; it was declared as an IIFE



// Problem 6
function countdown(num) {
  let count = n => {
    if (n < 0) console.log('Done!');
    else {
      console.log(n);
      count(n - 1);
    }
  };
  (count(num));
}

countdown(7);
