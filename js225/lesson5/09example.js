// let bark = function() {
  // console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
// };

// function Dog(name, breed, weight) {
  // this.name = name;
  // this.breed = breed;
  // this.weight = weight;

  // this.bark = bark;
// }

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'

// console.log(maxi.hasOwnProperty('bark'));   // true
// console.log(dexter.hasOwnProperty('bark')); // true
// console.log(biggie.hasOwnProperty('bark')); // true
// console.log(maxi.bark === dexter.bark);     // false
// console.log(maxi.bark === biggie.bark);     // false
// console.log(dexter.bark === biggie.bark);   // false



// function Dog(name, breed, weight) {
  // this.name = name;
  // this.breed = breed;
  // this.weight = weight;
// }

// Dog.prototype.bark = function () {
  // console.log(this.weight > 20 ? 'Woof!' : 'yip');
// };

// let dog1 = new Dog('Maxi', 'German Shepard', 32);
// let dog2 = new Dog('Biggie', 'Whippet', 9);

// dog1.bark();
// dog2.bark();


let a = {
  line: 1,
  write(value) {
    console.log(this.line, value);
    this.line += 1;
  },
};

function write(value) {
  let line = 1;
  return (function() {
    console.log(line, value);
    line += 1;
  })();
}

let myObj = { name: 'myObj' };
a.write(myObj.constructor);
a.write(myObj.__proto__);
a.write(Object.getPrototypeOf(myObj) === myObj.__proto__);
a.write(Object.create(null));
a.write(Object.create(null).__proto__);
a.write(Object.getPrototypeOf(Object.create(null)));
a.write(null);
a.write(myObj.__proto__ === Object.create(null).__proto__);


console.log(Object.prototype.constructor);
console.log(myObj.constructor === Object.prototype.constructor);

a.write('============');
console.log(Object.constructor); // [Function: Function]
a.write(Function.constructor); // [Function: Function]
a.write(Object.constructor === Function.constructor);  // true
a.write('============');
a.write(Object.hasOwnProperty('constructor'));  // false
a.write(Function.constructor.hasOwnProperty('constructor')); // false