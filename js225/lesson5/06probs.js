// Problem 1
// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a); // 1



// Problem 2
// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;
// bar.a = 2;
// console.log(bar.a); // 2




// Problem 3
let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp;       // 1

// We don't know for certain (based on the code provided) whether or not `far` is delegating to `boo`.
// We could test that by using `far.hasOwnProperty('myProp')`

