// Problem 1
/*
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope(); // inner
console.log(a); // outer
*/
/*
The local variable `a` defined within function `testScope` is confined to the function `testScope` and does not impact the 'outer' variable `a` defined on the first line of code.
Thus, both `console.log` invocations in the main program produce the same output.
*/


// Problem 2
/*
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope(); // inner
console.log(a); // inner
*/
/*
The first console.log outputs to screen 'outer' based on the initial variable declaration and initialization.
In this problem, when testScope is invoked, the global variable `a` is re-assigned to 'inner'.
Thus, the last console.log outputs the updated value of 'inner' to screen.
*/


// Problem 3
/*
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();
*/
/*
empty
play station
computer

Upon invocation of function `goShopping`, the initial value of `basket` (with global scope) is output: 'empty'.
Invoking `shop1` reassigns that value to 'tv'.
Invoking `shop2` reassigns that value to 'computer'.
Invoking `shop3` declares a new local `basket` and initializes it with the value 'play station', which is output to screen by the subsequent `console.log` statement.
The final console.log statement within function `goShopping` outputs the current value of the global `basket`: 'computer'.
*/


// Problem 4  **GOT THIS ONE WRONG!**
/*
function hello() {
  a = 'hi';
}

hello();
console.log(a); // hi
*/
/*
The assignment of an uninitialized variable `a` within function `hello` creates a new property of the global object accessible in the main scope.
Hence, that variable `a` is accessible in the main scope, and the console.log will output `hi` to the screen.
*/


// Problem 5
/*
function hello() {
  let a = 'hello';
}

hello();
console.log(a); // ReferenceError
*/
/*
When `hello` is invoked, the variable `a` declared is local, with function-scope.
Hence, this variable `a` will not be accessible in the main scope and the console.log will return an error.
*/


// Problem 6
/*
console.log(a);

var a = 1;
*/
/*
This will output undefined. The variable declaration of `a` will be hoisted, however the initialization and assignment of `a` to the number `1` will occur after the console.log. Hence, the console.log outputs undefined (or nothing) to the screen.
*/


// Problem 7
/*
console.log(a);

let a = 1;
*/
/*
This code will return a ReferenceError since the variable declaration (and initialization) of `a` occurs after the console.log.
**Review temporal dead zone** variable `a` is there since no value has been defined after hoisting.
*/


// Problem 8
console.log(a);

function hello() {
  a = 1;
}
/*
This code will return a ReferenceError.
Although the function declaration is hoisted, the function was not invoked, and the creation `a` on the global object will not occur.
*/
