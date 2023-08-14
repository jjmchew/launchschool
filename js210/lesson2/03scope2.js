// Problem 1
/*
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();
*/
/*
The console.log statement will output `undefined` to the screen.
This is because the declaration of variable `a` using `var` has function-level scope (i.e., it will be hoisted to the top of the function). Howver, the initialization and assignment of variable `a` will not occur (it will never be executed) within the `if` block.
*/


// Problem 2
/*
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();
*/
/*
The console.log statement will raise a ReferenceError.
This is because the declaration of variable `a` using `let` has block-scope and will not get 'hoisted' in the creation phase of execution. Thus, variable declaration will not have occurred prior to the console.log statement.
*/


// Problem 3
/*
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);
*/
/*
hello
ReferenceError

Within function `hello`, the `var` declaration is effectively 'hoisted'.
Thus, the assignment of variable `a` to 'hello' is an assignment of a function-scoped local variable `a`.
The subsequent console.log (within function `hello`) will output 'hello' to the screen.
Back in the main scope, the console.log will return a ReferenceError, since the previous variable `a` assigned was a local function-scoped variable.
*/


// Problem 4
/*
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);
*/
/*
hello
hello

Within function 'hello' the initial assigment of `a` to 'hello' creates a new global variable `a` accessible everywhere in the program.
The block-scoped variable declaration with `let` is never accessed.
Thus, when the function `hello` is invoked,  'hello' is output to scren by the console.log.
In the main scope, the console.log also outputs 'hello' to the screen, since the variable `a` is accessible globally.
*/


// Problem 5
/*
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);
*/
/*
4

Through hoisting, the variable `a` is effectively declared once at the top of the program.
There after, it is assigned to 'hello', and subsequently, to the various values of `index`.
The last assignment of `index` is to the number `4`. This is the value output to the screen by the final `console.log`.
*/


// Problem 6
/*
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);
*/
/*
hello

In this example there are 2 distinct variable `a`'s : 1 with global scope defined in the first line and another with block-scope within the `for` loop.
Assignments to the block-scoped variable `a` have no impact on the global variable `a`.
Thus, the console.log in the main scope will output the value of the global-scoped variable `a` to screen - "hello".
*/


// Problem 7
/*
let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo());
console.log(a);
*/
/*
4
3

The variable `a` declared on the first line effectively has global-scope and is accessible withim the function `foo`.
When `foo` is invoked, `a` is re-assigned to `2`. Then, the unnamed function assiged to `bar` is executed.
Within this unnamed function, `a` is re-assigned to `3`.
The return value of `bar` - `4` - is the output of the first console.log.
The seond console.log outputs the value of `a` - `3` - to the screen.
*/


// Problem 8
/*
var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested(); // superNested
  };

  return nested(); // superNested
}

console.log(checkScope()); // superNested
console.log(a); // global
*/
/*
superNested
global

Since each level of nesting utilizes functions, the scope of each `var`-declared variable `a` corresponds to each function.
Thus, 'superNested' is returned by the first console.log invocation, and 'global' is returned by the second.
*/


// Problem 9
/*
let a = 'outer';
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
*/
/*
outer
outer
outer
inner

The function `setScope` does not change the variable `a` in any way, however the variable `b` (with global scope) is re-assigned to 'inner'.
Thus, the second console.log invocation with `b` passed in as an argument outputs 'inner' to the screen.
*/


// Problem 10
/*
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);
*/
/*
50
60
15

The function `incrementBy` has no impact on the variable with global-scope `increment`.
The parameter and local variable `increment` scoped to the function `incrementBy` is entirely separate from the global-scope variable `increment`.
Howveer, the function 'incrementBy` does increment the variable with global-scope `total`.
Hence, the first console.log outputs `50` to the screen, the value that `total` is initialized with.
The second console.log returns an incremented value of `total`, `60`.
The third console.log returns the value of `increment` that it was initialized with, `15`.
*/


// Problem 11
let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};
/*
The first console.log will return 'outer'.
Then the code will raise an error, since `setScope` will be declared in the creation phase, but the anonymous function will not be assigned until after the `setScope` function invocation.
*/
