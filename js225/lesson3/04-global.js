// Problem 1
// Without strict mode, `window` is the implicit execution context in the browser,
// and `global` is the implicit execution context in Node (although, practically, it is `{}`).
// With strict mode enabled, 'undefined' is the implicit execution context



// Problem 2
// a = 10;
// console.log(window.a === a); // true



// Problem 3
// "use strict"

// a = 10; // RefernceError - 'a' not defined

// console.log(window.a === a);



// Problem 4
// function func() {
//   let b = 1;
// }

// func();

// console.log(b); // ReferenceError - `b` is not in (main) scope



// Problem 5
// function func() {
//   b = 1;
// }

// func();

// console.log(b); // logs 1 : b is a property of global object
// console.log(global.b); // works for node, but not browser



// Problem 6
"use strict"

function func() {
  b = 1; // ReferenceError - no undeclared variables in strict mode
}

func();

console.log(b);
