// Problem 1
// function whatIsMyContext() {
//   return this;
// }
// will depend on invocation - likely to be invoked in main context, hence points to Window or global




// Problem 2
// function whatIsMyContext() {
//   return this;
// }

// whatIsMyContext();
// definitely main / global context since invoked as a function in main scope




// Problem 3
// function foo() {
//   function bar() {
//     function baz() {
//       console.log(this);
//     }

//     baz();
//   }

//   bar();
// }

// foo();  // this is the Window / global - invoked through function invocation in `baz`




// Problem 4
// let obj = {
//   count: 2,
//   method() {
//     return this.count;
//   },
// };

// obj.method(); // this will be 'obj' : method invocation on 'obj'




// Problem 5
// 'use strict';

// function foo() {
//   console.log(this.a);
// }

// let a = 2;
// foo(); // TypeError, undefined will not have a property 'a'




// Problem 6
// let a = 1;
// function bar() {
//   console.log(this.a);
// }

// let obj = {
//   a: 2,
//   foo: bar,
// };

// obj.foo(); // logs 2 : execution context is 'obj'




// Problem 7
let foo = {
  a: 1,
  bar() {
    console.log(this.baz());
  },

  baz() {
    return this;
  },
};

foo.bar(); // returns 'foo' as this
let qux = foo.bar;
qux(); // TypeError, bar invoked as function in global context:  baz will not be present in global context

