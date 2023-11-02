// (function (){ console.log("hello"); })();  // style 1
// (function (){ console.log("hello"); }());  // style 2 : invoking `()` inside outer `()`

// using objects
let calcs = {
  a: 5,
  b: 3,
  add() {
    return this.a + this.b;
  },
  subtract() {
    return this.a - this.b;
  },
  multiply() {
    return this.a * this.b;
  },
  divide() {
    return this.a / this.b;
  },
};

console.log(calcs.add());
console.log(calcs.multiply());
calcs.a = 10;
console.log(calcs.add());
console.log(calcs.multiply());
console.log(calcs);


// using IIFEs
let calcs2 = (function calcs2() {
  let a = 5;
  let b = 3;

  return {
    add() {
      return a + b;
    },
    multiply() {
      return a * b;
    },
  };
})();

console.log(calcs2.add());
console.log(calcs2.multiply());
calcs2.a = 10;
console.log(calcs2.add());
console.log(calcs2.multiply());
console.log(calcs2);