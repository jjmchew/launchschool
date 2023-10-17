// Problem 1
// 'use strict'; // for Problem 2

// function foo() {
//   return this;
// }

// let context = foo();
// console.log(context); // [object Window]


// Problem 2
// in strict mode, problem 1 would return 'undefined'



// Problem 3
// let obj = {
//   foo() {
//     return this;
//   },
// };

// let context = obj.foo();

// console.log(context); // obj

// this is different since foo is invoked on the calling object 'obj', which is returned as the execution context
// and assigned to 'context'




// Problem 4
// // var message = 'Hello from the global scope!'; // this doesn't work in node - no 'global' scope when 'var' is used
// message = 'Hello from the global scope!'; // this works in node - still adds undeclared vars to a 'global' object accessible using 'this'

// function deliverMessage() {
//   console.log(this.message);
// }

// deliverMessage(); // Hello from the global scope!

// let bar = {
//   message: 'Hello from the function scope!',
// };

// bar.deliverMessage = deliverMessage;

// bar.deliverMessage(); // Hello from the function scope!



// Problem 5
// var a = 10;
// let b = 10;
// let c = {
//   a: -10,
//   b: -10,
// };

// function add() {
//   return this.a + b;
// }

// c.add = add;

// console.log(add()); // 10 + 10 => 20
// console.log(c.add()); // -10 + -10 (obj 'b') => -20 ** WRONG **
//                       // -10 + 10 (main 'b') => 0  since obj b cannot be accessed without 'this'



// part 2
// let a = 10; // changed from 'var'
// let b = 10;
// let c = {
//   a: -10,
//   b: -10,
// };

// function add() {
//   return this.a + b;
// }

// c.add = add;

// console.log(add()); // undefined + 10 => NaN
// console.log(c.add()); // -10 + 10 => 0



// Problem 6
// explicit function execution context:  use `call` or `apply`




// Problem 7
// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add() {
//      return this.a + this.b;
//    },
// };

// console.log(bar.add.call(foo)); // 3



// Problem 8
let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// invoke outputList here
outputList.apply(fruitsObj, fruitsObj.list);

/*
Desired output:

A Collection of Fruit:
Apple
Banana
Grapefruit
Pineapple
Orange
*/


// Problem 9
/*
let args = [].slice.call(arguments);

Since `arguments` is only array-like, it does not have the array methods available to it.
Using `call` invokes the `slice` method from an array (literal) and passes to it the context of the `arguments` object,
which results in an actual array object with the same elements as `arguments`.

*/