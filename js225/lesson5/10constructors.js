// Problem 1
// var a = 1;
// let foo;
// let obj;

// function Foo() {
  // this.a = 2;
  // this.bar = function() {
    // console.log(this.a);
  // };
  // this.bar();
// }

// foo = new Foo(); // 2

// foo.bar();  // 2
// Foo(); // 2

// obj = {};
// Foo.call(obj);  // 2
// obj.bar();  // 2

// console.log(this.a);  //1  ** WRONG **
// console.log(a);
// console.log(this);
// console.log(global);  // for Node

/*
For this problem a few distinctions to remember:
- properties of the global object are DIFFERENT than variables declared with `let` or `const`
- hence, `this.a` has value 2 (in browser) whereas `a` has value `a`, as initialized using `let`
  - if `var` is used, then the value of `this.a` will be the same as `a` (in the browser)

- in NODE:
  - the `this` does not refer to the global object, it refers to the `exports` object and hence `this.a` and `a` are entirely distinct
    - there is no different whether you use `var` or `let`, since `this` never refers to the same object where variables declared with `var` reside (global object)
      - i.e., if you log `global`, you can see variables declared with `var` (the variable `a` in this code)
*/




// Problem 2
// let RECTANGLE = {
  // area() {
    // return this.width * this.height;
  // },
  // perimeter() {
    // return 2 * (this.width + this.height);
  // },
// };

// function Rectangle(width, height) {
  // this.width = width;
  // this.height = height;
  // this.area = RECTANGLE.area();  // original code
  // this.area = RECTANGLE.area.call(this);
  // this.perimeter = RECTANGLE.perimeter();  // original code
  // this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);  // 6  ** WRONG **
// console.log(rect1.perimeter);  // 10 ** WRONG **
/*
Answers given were WRONG since the execution context for RECTANGLE
is NOT the object `rect1`, but the global context, for which no `width`
and `height` have been declared.

- Adding the `call` invocation with the explicit context `this` solves this problem (the code shown above)
*/




// Problem 3
// function Circle(radius) {
  // this.radius = radius;
  // this.area = function() {
    // return this.radius * this.radius * Math.PI;
  // };
// }
// My implementation is NOT ideal - I'm replicating the method on every instance of Circle
// Improved implementation below
// function Circle(radius) {
  // this.radius = radius;
// };

// Circle.prototype.area = function() {
  // return this.radius * this.radius * Math.PI;
// };


// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27





// Problem 4
// let ninja;
// function Ninja() {
  // this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
  // return this.swung;
// };

// console.log(ninja.swingSword()); // true
/*
The code logs `true` since regardless of when the method `swingSword` is added to the prototype for instances of object `Ninja` (i.e., before or after instantiation), they can still be invoked as long as the method has been defined before invocation.
*/





// Problem 5
// let ninja;
// function Ninja() {
  // this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
  // swingSword: function() {
    // return this.swung;
  // },
// };

// console.log(ninja.swingSword()); // true

// let ninja2 = new Ninja();
// console.log(ninja2.swingSword());

/*
** WRONG **
Although this implementation re-writes the entire `prototype` object, the `swingSword` method has still been defined prior to invocation of the method.
*/

/*
Instances of the object will point to the prototype object they were instantiated with.  In this case, although the prototype object was re-assigned, this occurred AFTER the `ninja` object was instantiated, hence the prototype still pointed to the original (empty) object, which does NOT have a `swingSword` method.

The subsequent instantiation of ANOTHER `Ninja` object DOES have the `swingSword` method in it's prototype.
*/





// Problem 6
// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// };

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true





// Problem 7
let ninjaA = (function() {
  function Ninja(){ this.a = 3; };
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = Object.create(ninjaA);
let ninjaC = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor);
console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
console.log(ninjaC.constructor === ninjaA.constructor);    // true
console.log(ninjaC.constructor === ninjaB.constructor);    // true

console.log(' === ');
console.log(ninjaA.a);
console.log(ninjaB.a);
console.log(ninjaC.a);  // note this this returns undefined - since the prototype was DIFFERENT, the properties are different!

