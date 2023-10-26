// Problem 1
// let shape = {
//   getType () {
//     return this.type;
//   }
// };

// function Triangle(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// };

// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function () {
//   return this.a + this.b + this.c;
// };

// Triangle.prototype.constructor = Triangle; // ** I forgot this **

// console.log(shape);
// let t = new Triangle(3, 4, 5);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// console.log(t.getType());                   // "triangle"
// console.log(shape);

// /*
// ** NEED TO SET CONSTRUCTOR **
// */





// Problem 2

// my version (will be NODE specific!)
// function User(first, last) {
//   if (this === global) {
//     return new User(first, last);
//   } else {
//     this.name = first + ' ' + last;
//   }
// }

// LS version
// function User(first, last){
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = first + ' ' + last;
// }


// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe





// Problem 3
// function createObject(obj) {
//   let newObj = {};
//   Object.getOwnPropertyNames(obj).forEach(prop => newObj[prop] = obj[prop]);
//   Object.setPrototypeOf(newObj, obj);
//   return newObj;
// }

// alternate solution
// function createObject(obj) {
//   let Temp = function() {};
//   Temp.prototype = obj;
//   return new Temp;
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true





// Problem 4

// Object.getPrototypeOf({}).begetObject = function() {  // my version
// Object.prototype.begetObject = function() {  // LS version
//   let F = function() {};
//   F.prototype = this;
//   return new F;
// };

// let foo = {
//   a: 1,
// };

// // console.log(Object.getPrototypeOf(foo));

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

// console.log(Object.getPrototypeOf(Object));




// Problem 5
function neww(constructor, args) {
  let newObj = {};
  constructor.call(newObj, ...args);
  Object.setPrototypeOf(newObj, constructor.prototype);
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