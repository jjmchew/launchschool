// Problem 1
// JS is a garbage-collected language - the runtime automatically takes care of memory allocation and release when declaring variables, etc.


// Problem 2
// let myNum = 1;

// function foo() {
//   let myArr = ['this is an array'];
//   // what is eligible for GC here?   ['this is an array']  ** WRONG ** still referenced by `myArr`
// }

// foo();

// what is eligible for GC here?  1 could be used later, so not eligble  ** CORRECT **
// ['this is an array'] is eligible here

// more code




// Problem 3
// function makeGreeting() {
//   let foo = { greeting: 'hello' };
//   return function(name) {
//     foo.name = name;
//     return foo;
//   };
// }

// let greeting = makeGreeting();

// is the object eligible for GC here?   NO, a closure is maintained within the returned function, while program is live, `greeting` may be used which requires `foo`

// more code




// Problem 4
let bash = {};
// `{}` will be eligible for garbage collection when 'bash' is reassigned, or program ends