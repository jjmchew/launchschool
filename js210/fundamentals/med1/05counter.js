// Code Snippet 1
/*
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}
*/
// This will log 'The total value is 15'.
// Hoisting will effectively cause the function definition to be defined prior to the (re-)assignment of number `5` to the `counter` variable.


// Code Snippet 2
/*
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
*/
// This will return 'The total value is NaN'.
// Since the variable `counter` is initialized and assigned as a function, the String representation of the function will coerce to `NaN`.  Multiplying `NaN` with `5` will return `NaN`.
// ** WRONG **
// Multiplying `NaN` with `undefined` (rate will have been effectively declared, but not assigned a value when `console.log` is invoked) returns `NaN`.

// Code Snippet 3
/*
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
*/
// 'The total value is 15'
// This code snippet performs equivalently to code snippet 1 after hoisting.


// Code Snippet 4
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
// This code will raise an error since the variable `counter` will be declared twice.
// Initially, through hoisting, the variable `counter` will be initialized and assigned to the defined function.
// Subsequently, the `let` keyword tries to initialize `counter` again, raising an error.
// ** WRONG **
// Hoisting does NOT evaluate the function definition first. The error occurs when the function definition is evaluated AFTER the initial `let` declaration.
