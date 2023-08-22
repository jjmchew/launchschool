/*
logValue();

function logValue() {
  console.log('Hello, world!');
}
*/
/*
Hello, world!

Again, as a result of 'hoisting', the declaration of function `logValue` effectively occurs before line 1 of this program.
Thus, when executed, JavaScript is aware of the function `logValue` and 'Hello, world!' is output to the screen when `console.log` is invoked within the function.
*/

// FURTHER EXPLORATION

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

/*
Since the function definition is hoisted first, the effective code executed would appear as:
function logValue() {
  ...
}

logValue = 'foo';

console.log(typeof logValue);

Hence, the output to the screen by the final `console.log` is a 'string'.
*/
