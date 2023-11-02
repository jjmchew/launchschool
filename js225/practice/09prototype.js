// let foo = {
//   a: 1,
// };
// console.log(Object.getPrototypeOf(foo) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

// https://launchschool.com/lessons/24a4613a/assignments/da0992e3
// Problems 1 - 3
// let prot = {};

// let bar = Object.create(prot);
// console.log(Object.getPrototypeOf(bar) === prot);
// console.log(prot.isPrototypeOf(bar));



// Problem 4
// let prot = {};

// let foo = Object.create(prot);

// console.log(prot.isPrototypeOf(foo)); // true
// console.log(Object.prototype.isPrototypeOf(foo)); // false (up the chain, but not direct) ** WRONG **




// https://launchschool.com/lessons/24a4613a/assignments/7143264c
// Problem 3
// let boo = {};
// boo.myProp = 1;

// let far = Object.create(boo);

// // lots of code

// far.myProp;       // 1
// console.log(far.hasOwnProperty('myProp'));





// https://launchschool.com/lessons/24a4613a/assignments/b158be5a
// Problem 1
function getDefiningObject(object, propKey) {
  let testObj = object;
  while (Object.getPrototypeOf(testObj) !== null) {
    if (testObj.hasOwnProperty(propKey)) return testObj;
    testObj = Object.getPrototypeOf(testObj);
  }
  return Object.getPrototypeOf(testObj);
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
console.log(getDefiningObject(qux, 'b') === foo);     // => true