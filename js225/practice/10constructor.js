// https://launchschool.com/lessons/24a4613a/assignments/2d53f659

// Problem 1
// let a = 1;
// let foo;
// let obj;

// b = 3;
// this.c = 200;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
//   console.log('c: ', this.c);
// }

// foo = new Foo(); //2

// foo.bar(); // 2
// Foo(); // 2  this === global

// obj = {};
// Foo.call(obj); // 2
// obj.bar(); // 2

// console.log(this.a); // 2 in browser;  undefined in node since this === module.exports
// console.log(global); // shows a: 2
// console.log(this); // empty object


// Problem 2
// original problem
// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); // NaN
// console.log(rect1.perimeter); // NaN

/*
to fix this problem:
1. use call / apply for methods on RECTANGLE
2. define methods on Rectangle.prototype
3. pass in context in methods
4. try arrow methods - don't think it will work tho
*/

// #region ============ use call / apply
// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); // 6
// console.log(rect1.perimeter); // 10
// #endregion

// #region ============ use prototype v1
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }
// Rectangle.prototype.area = function area() {
//   return this.width * this.height;
// };
// Rectangle.prototype.perimeter = function perimeter() {
//   return 2 * (this.width + this.height);
// };

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area()); // 6  ** Note that property changed to reflect method invocation **
// console.log(rect1.perimeter()); // 10
// #endregion

// #region ============ pass in context
// let RECTANGLE = {
//   area(context) {
//     return context.width * context.height;
//   },
//   perimeter(context) {
//     return 2 * (context.width + context.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area(this);
//   this.perimeter = RECTANGLE.perimeter(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); // 6
// console.log(rect1.perimeter); // 10
// #endregion

// #region ============ try arrow methods
// definitely does not work, since the arrow function is effectively defined in the 'main' scope which is 'module.exports'
// let RECTANGLE = {
//   area: () => {
//     console.log(this === module.exports);
//     return this.width * this.height;
//   },
//   perimeter: () => {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);
// #endregion



// Problem 3
// #region using classical approach (constructor fcts, prototype)
// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.area = function area() {
//   return Math.PI * this.radius * this.radius;
// };
// #endregion

// #region using classical approach - alt
// function Circle(radius) {
//   this.radius = radius;
//   this.area = function area() {
//     return Math.PI * this.radius * this.radius; // this works w/ or w/o `this`(.radius)
//   }
// }
// #endregion

// #region using class
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   area () {
//     return Math.PI * this.radius * this.radius;
//   }
// }
// #endregion

// Provided test code
// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27





// Problem 4
// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword()); // true




// Problem 5
// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword()); // TypeError - `undefined` is not a function
// this occurs since Ninja.prototype is being re-assigned to an entirely different object which is 
// NOT referenced by the existing instance of `ninja`.
// if the existing prototype had been mutated, then the existing `.prototype` reference in `ninja` would 
// still be valid



// Problem 6
// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// Ninja.prototype.swing = function swing() {
//   this.swung = true;
//   return this;
// };

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true




// Problem 7
let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
let Ninja = ninjaA.constructor;
let ninjaB = new Ninja();

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
