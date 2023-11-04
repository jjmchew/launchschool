// https://launchschool.com/lessons/24a4613a/assignments/cbb1afa7

// #region Problem 1
// let shape = {
//   getType() {
//     console.log(this.type);
//     return this.type;
//   }
// };

// let Triangle = function (a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// };

// Triangle.prototype = shape;
// shape.constructor = Triangle;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// };


// // test code
// let t = new Triangle(3, 4, 5);
// t.constructor;                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// t.getType();                   // "triangle"
// #endregion


// #region Problem 2
// #region V1
// function User(first, last) {
//   if (this instanceof User) {
//     this.name = first + ' ' + last;
//   } else {
//     let newUser = new User(first, last);
//     return newUser;
//   }
// }
// #endregion

// #region V2
// function User(first, last) {
//   if (!(this instanceof User)) return new User(first, last);

//   this.name = first + ' ' + last;
// }
// #endregion

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe
// #endregion


// #region Problem 3
// #region V1
// function createObject(obj) {
//   let newObj = Object.assign({}, obj);
//   Object.setPrototypeOf(newObj, obj);
//   return newObj;
// }
// #endregion
// #region V2
// function createObject(obj) {
//   let Obj = function () {};
//   Obj.prototype = obj;
//   return new Obj();
// }
// #endregion
// #region V3  *****
// Something is going on here - can't use the **prototype** constructor of `obj` as the constructor for `Obj`
//   - why would that affect the prototype of the new object?  We've set `Obj.prototype` explicitly
// function createObject(obj) {
//   console.log('obj: ', obj);
//   console.log(Object.getPrototypeOf(obj).constructor);
//   let Obj = Object.getPrototypeOf(obj).constructor;
//   // let Obj = function () {};
//   console.log(Obj.prototype);
//   console.log(Obj);
//   Obj.prototype = obj;
//   Obj.prototype.hi = 'hi';
//   console.log('Obj.prototype: ', Obj.prototype);
//   console.log('obj: ', obj);
//   return new Obj();
// }
// #endregion
// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true
// console.log(Object.getPrototypeOf(bar));
// console.log(Object.getPrototypeOf(foo));
// #endregion


// #region Problem 4
// let foo = {
//   a: 1,
// };

// // let proto = Object.getPrototypeOf(foo);
// // proto.begetObject = function() {
// Object.prototype.begetObject = function () {
//   let F = function F() {};
//   F.prototype = this;
//   return new F;
// };

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true
// #endregion


// #region Problem 5
/*
new:
- creates a new object
- sets `this` to the new object
- invokes the constructor
- sets prototype
- returns the new object
*/
function neww(constructor, args) {
  let newObj = Object.create(constructor.prototype);
  constructor.call(newObj, ...args);
  return newObj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}
// #endregion