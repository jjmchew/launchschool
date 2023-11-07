// https://launchschool.com/lessons/24a4613a/assignments/b158be5a

// Problem 1
function getDefiningObject(object, propKey) {
  let testObject = object;
  while (testObject && !testObject.hasOwnProperty(propKey)) {
    testObject = Object.getPrototypeOf(testObject);
  }
  return testObject;
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

