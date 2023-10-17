// example 1
// function foo() {
//   return 'this here is: ' + this;
// }

// console.log(foo());                // "this here is: [object Window]"




// example 2
// let object = {
//   foo() {
//     return 'this here is: ' + this;
//   },
// };

// console.log(object.foo());              // "this here is: [object Object]"

// let bar = object.foo;
// console.log(bar());                     // "this here is: [object Window]"




// example 3

// function foo() {
//   console.log('this here is: ' + this);
// }

// foo();                // "this here is: undefined"
// console.log('this here is: ' + this); // "this here is: [object Window]"




// example 4
"use strict";

let object = {
  foo() {
    return 'this here is: ' + this;
  },
};

console.log(object.foo());              // "this here is: [object Object]"

let bar = object.foo;
console.log(bar());                     // "this here is: undefined"

console.log('this here is: ' + this); // "this here is: [object Window]" (browser)
                                      // this here is: [object Object] (node)

