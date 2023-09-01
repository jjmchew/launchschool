// Question 1
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);
/*
Side effects in the `foo` function are:
- mutation of `qux` array in outer-scope through `pop`
- console.log (IO)

WRONG:
- reference to `bar` and `baz` - values of these variables will influence return value of `foo` (return value isn't solely based on arguments)

- strictly speaking, relying on outside variables is not reading / writing to a data entity
- also is not an external function call
*/

// Function 1
function sum(a, b) {
  console.log(a + b);
  return a + b;
}
// not pure : console.log


// Function 2
function sum(a, b) {
  a + b;
}
// pure : but also not useful, no return value

// Function 3
function sum(a, b) {
  return a + b;
}
// pure : useful

// Function 4
function sum(a, b) {
  return a + b + Math.random();
}
// not pure : generates a random number


// Function 5
function sum(a, b) {
  return 3.1415;
}
// pure: but does not rely on arguments


