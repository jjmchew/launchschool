// https://launchschool.com/lessons/7cd4abf4/assignments/1d43f233

// ***** Problem 1
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();
/*
This program will output `undefined` to the screen.
Within the declaration for the function `say`, a local variable `a` is declared using `var`.
This local variable is scoped within the function, and because of the use of `var` and the creation phase of JS code execution, the declaration for the variable will appear 'hoisted' to the top of the function.
This 'hoisted' variable declaration will not assign a value and the default `undefined` will be assigned.
Hence, when `console.log` is invoked, the value passed in as an argument will be `undefined`, which is what is output to the screen.
*/


// ***** Problem 2
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();
/*
This program will raise a 'ReferenceError' when the `console.log` invocation is reached on line 7.
The variable `a` is declared using `let` within the `if` block, and is only available within that `if` block since `let` variables are block-scoped.
*/


// ***** Problem 3
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);
/*
This code will first output 'hello' to the screen (from line 3) and then raise a 'ReferenceError' (from line 11).
Within the function `hello`, the variable `a` is declared using `var`, which gives this variable function-scope.
As a result of the creation phase of JS code execution, the variable declaration will appear 'hoisted' to the top of the function, prior to the current line 2 (e.g., a line 1.5).
On the existing line 2, `a` is assigned to the value `'hello'` and subsequently that string value is passed as an argument to `console.log` on line 3. Thus, the string value 'hello' is output to the screen.
When the `hello` function ends execution and the `console.log` on line 11 is executed, the variable `a` with function-scope is NOT available. Thus, a 'ReferenceError' is raised.
*/


// ***** Problem 4
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);
/*
This code will output 'hello' to the screen, twice.
The first 'hello' is the result of the `console.log` on line 3. The value of `a` is assigned on line 2, as the string 'hello'.
`a` is automatically created as a property of the global object, since no local variable `a` has been previously declared. The block-scoped local variable `a` declared using `let` in the `if` block is a separate and distinct `a` which has no impact on line 2.
The second 'hello' is the result of the `console.log` on line 11, which outputs the value of the property `a` of the global object.
*/


// ***** Problem 5
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);
/*
This code outputs `4` to the screen.
The local variable `a` is declared using `var` within the main (global) scope and again (in the same scope) within the `for` loop block.
Since both locations are part of the same scope, the 2nd (redundant) declaration is effectively ignored and line 4 re-assigns the value of `a` for each iteration of the loop.
The final value assigned to `a` is the last `index` value, which is `4`.
Thus, on line 7, when `console.log` is invoked, `4` is output to the screen.
*/


// ***** Problem 6
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);
/*
'hello' is output to the screen.
In this code, there are 2 distinct local variables named `a` declared using `let` within different scopes.
There is a local variable `a` with global scope declared on line 1.
There is a 2nd local variable `a` with scope local to the `for` loop block defined on line 4.
When `console.log` is invoked on line 6, the global `a` is referenced and 'hello' is output to the screen. 
*/


// ***** Problem 7
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
/*
This code will output `4` on the first line, and then `3` on the second line.
The variable `a` is declared using `let` in the global scope and is accessible within all nested scopes.
Thus, when function `foo` is called, `a` is first re-assigned, and then the local `bar` function is invoked.
Within this local function `bar`, `a` is again re-assigned to `3` and then the function `bar` returns `4`, which is also returned for function `foo`. 
Thus, `4` is output to the screen by the `console.log` on line 13.
The current value referenced by `a`, `3` is output to the screen by the `console.log` on line 14.
*/



// ***** Problem 8
var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(a);
/*
This code will return `superNested` on the first line, and then `'global'` on the second line.
Within the function `checkScope`, another local variable `a` is declared using `var`, which has function-scope and shadows access to the global `a`.
This function `checkScope` returns the value from the anonymous function assigned to the constant `nested`, which in turn, returns the value from the anonymous function assigned to a local variable `superNested`.
Invoking `superNested` returns the string `'superNested'`, which is ultimately output to the screen by the `console.log` on line 18. This string `'superNested'` is assigned to a variable `a` which has scope only within the function `checkScope`.
Hence, on line 19 when `console.log` is invoked the value of `a` passed in as an argument is the value referenced by the variable `a` with global scope, `'global'`.
*/


// ***** Problem 9
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
/*
This code will output:
'outer'
'outer'
'outer'
'inner'

Variables `a` and `b` are both declared using `let` and have global scope, thus being available within the function `setScope`.
When `setScope` is invoked, the value referenced by `a` is passed in as an argument and assigned to a function-scoped local variable `foo`.
Within `setScope`, the reassignment of `foo` does not affect the value referenced by `a`. However, `b` is re-assigned to `'inner'`.
Thus, lines 7 and 8 output to the screen the same value referenced by `a` and the updated value referenced by `b`.
*/


// ***** Problem 10
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);
/*
The code outputs:
50
60
15

The variables `total` and `increment` are both declared using `let` and have global scope. `total` is accessible within the function `incrementBy`.
The function `incrementBy` declares a parameter `increment` which is distinct from the global `increment`.
On line 8, the first `console.log` outputs `50` to the screen - the value with which `total` was declared and initialized with on line 1.
On line 9, `incrementBy` is invoked with `10` passed in as an argument. This value `10` is assigned to the function-scoped `increment` and used to increment the global `total`.
Hence, on line 10, the updated value of `total`, 60, is output to the screen.
On line 11, the (unchanged) value that the global `increment` was declared and initialized with, 15, is output to the screen.
*/


// ***** Problem 11
let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};
/*
This code will output 'outer' and then raise a TypeError.
The `console.log` on line 3 will output the value that local variable `a` is initialized with, `'outer'`.
During the creation phase of JS code execution, a local variable `setScope` will be effectively 'hoisted' to the top of the code which creates a local variable `setScope` but assigns it the default value of `undefined`.
The anonymous function assignment to `setScope` on line 7 will not be 'hoisted'.
Hence, trying to invoke `setScope` as a function will raise a TypeError.
*/
