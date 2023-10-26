// Pattern 1
// function NewArray (args) {
//   // this = args; // cannot assign `this` directly
//   args.forEach(arg => this.push(arg));
//   // return new Array(...args); // this returns an Array object, no access to methods on `newArr`
// }
// NewArray.prototype = Object.create(Object.getPrototypeOf([]));

// NewArray.prototype.first = function () {
//   return this[0];
// };

// NewArray.prototype.last = function() {
//   return this[this.length - 1];
// };

// let arr1 = [0, 1, 2];
// let arr2 = new NewArray([0, 1, 2]);


// console.log(arr1);
// console.log(arr2);

// console.log(arr1[2]);
// console.log(arr2[2]);

// console.log(arr1.first);

// console.log(arr2.first());
// console.log(arr2.last());

// arr2.push(3);
// console.log(arr2.last());







// Pattern 2

// My solution
// function newPerson(name) {
//   this.name = name;
// }

// Object.defineProperties(newPerson.prototype, {
//   log: {
//     value: function () {
//       console.log(this.name);
//     },
//     writable: false,
//   },
// });

// // newPerson.prototype.log = function () {
// //   console.log(this.name);
// // };

// let me = new newPerson('Shane Riley'); // needed to add 'new' operator!  Otherwise, will not create a new object
// me.log();     // => Shane Riley
// me.log = function() { console.log('Amanda Rose'); };
// me.log();     // => Shane Riley


// LS solution
// 'use strict'; // does not allow re-assignment of read-only properties

function newPerson(name) {
  return Object.defineProperties({name: name}, {
    log: {
      value() {
        console.log(this.name);
      },
      writable: false,
    },
  });
}

let me = newPerson('Shane Riley'); // returns an object with unwritable property `log`
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley

console.log(module);
console.log(__dirname);
console.log(__filename);

