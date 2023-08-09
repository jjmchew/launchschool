// Question 1
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
// The 'foo' function does NOT affect the output since 'bar' in the main scope is distinct from 'bar' in the function scope.

// Question 2

function get_input(str) {
  let rlSync = require('readline-sync');
  return rlSync.question(str)
}

let firstName = get_input('What is your first name? ');
let lastName = get_input('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

// Question 3
let multiply = (num1, num2) => num1 * num2;
let num1 = get_input('Enter the first number: ');
let num2 = get_input('Enter the second number: ');
num1 = parseFloat(num1)
num2 = parseFloat(num2)
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

// Question 4
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
// This code logs NOTHING to the console - the explicit 'return' ensures the 'console.log' is never invoked.

// Question 5

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
// This code also logs NOTHING to the console - there are not 'console.log' invocations.

// Question 6
function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);
/*
function arguments: 2, 3, 4
function body: `let result = ... ` and `return result;`
function declaration: `function multiplyNumbers(num1, num2, num3)` + function body!
function invocation: `multipyNumbers(2, 3, 4);`
function name: multiplyNumbers
function parameters: num1, num2, num3
function return value: result
names of all variables in program: product, num1, num2, num3, result, multiplyNumbers (a global variable)
*/

// Question 7
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');
// Hello
//  (blank as undefined)

// Question 8
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);
// 42
// 3.1415
// (will ignore the 3rd argument)

// Question 9, 10
function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
// variables on each line: (G is global, L is local)
// 1. multiply G, left L, right L
// 2. product L, left L, right L
// 3. product L
// 6. getNumber G, prompt L
// 7. question G, prompt L, parseFloat G (built-in fcts also have variable names!)
// 10. left G, getNumber G
// 11. right G, getNumber G
// 12. left G, right G, multiply G, console G (built-in fct, log is a method - not a variable name)

// Question 11
// The `left` and `right` variables on lines 1 & 2 are NOT the same as the `left` and `right` on lines 10-12.
// The values assigned to the global `left`/`right` variables are assigned to the local `left`/`right` as part of the multiply function invocation.

