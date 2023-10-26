// Problem 1

// Version 1 solution - took me a while
// function getDefiningObject(object, propKey) {
//   let testObj;
//   let proto = object;
//   do {
//     testObj = proto;
//     console.log(proto);
//     if (testObj && testObj.hasOwnProperty(propKey)) return testObj;
//     else proto = Object.getPrototypeOf(testObj);
//   } while (proto !== null);
//   return null;
// }

// Version 2
// function getDefiningObject(object, propKey) {
//   let testObj = object;
//   while (testObj && !testObj.hasOwnProperty(propKey)) {
//     console.log(testObj);
//     testObj = Object.getPrototypeOf(testObj);
//   }
//   return testObj;
// }


// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log('foo', foo);
// console.log('bar', bar);
// console.log('baz', baz);
// console.log('qux', qux);

// console.log('========');
// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log('========');
// console.log(getDefiningObject(qux, 'e') === null);    // => null

// console.log('========');
// console.log(getDefiningObject(foo, 'a') === foo);
// console.log('========');
// console.log(getDefiningObject(bar, 'a') === foo);
// console.log('========');
// console.log(getDefiningObject(baz, 'a') === foo);
// console.log('========');
// console.log(getDefiningObject(qux, 'a') === foo);





// Problem 2
// function shallowCopy(object) {
//   let newObj = Object.create(Object.getPrototypeOf(object));
//   Object.keys(object).forEach(key => {
//     newObj[key] = object[key];
//   })
//   return newObj;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false
// console.log(baz.hasOwnProperty('c'));  // true





// Problem 3
function extend(destination, ...sources) {
  let newObj = destination;
  sources.forEach(obj => {
    Object.getOwnPropertyNames(obj).forEach(key => {
      newObj[key] = obj[key];
    });
  });
  return newObj;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
