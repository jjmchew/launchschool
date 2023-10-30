// https://launchschool.com/lessons/c9200ad2/assignments/7bef6908

// Problem 1
// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod()); // this points to `myChildObject`
// hence, returns `undefined`

// Problem 2

// using 'self' - not possible - can't `this` will never reference an outer object
// using arrow function - also doesn't work, since myChildObject is a nested object within `myObject`

// ==== using an explicit reference
// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return myObject.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod());

// ==== using call / apply
// console.log(myObject.myChildObject.myMethod.call(myObject));

// ==== using bind (and IIFE)
// console.log(myObject.myChildObject.myMethod.bind(myObject)());


// Problem 4
// let computer = {
//   price: 30000,
//   shipping: 2000,
//   total() {
//     let tax = 3000;
//     function specialDiscount() {
//       if (this.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }

//     return this.price + this.shipping + tax - specialDiscount();
//   }
// };

// console.log(computer.total()); //35000
// specialDiscount is always 0 since `this` refers to global and always executes the 'else' clause

// ==== arrow function
// let computer = {
//   price: 30000,
//   shipping: 2000,
//   total() {
//     let tax = 3000;
//     specialDiscount = () => {
//       if (this.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }

//     return this.price + this.shipping + tax - specialDiscount();
//   }
// };

// ==== call / apply / bind
// let computer = {
//   price: 30000,
//   shipping: 2000,
//   total() {
//     let tax = 3000;
//     function specialDiscount() {
//       if (this.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }

//     // return this.price + this.shipping + tax - specialDiscount.call(computer);
//     return this.price + this.shipping + tax - specialDiscount.bind(computer)();
//   }
// };

// ==== arrow function
// let computer = {
//   price: 30000,
//   shipping: 2000,
//   total() {
//     let tax = 3000;
//     specialDiscount = () => {
//       if (this.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }

//     return this.price + this.shipping + tax - specialDiscount();
//   }
// };

// === self
// let computer = {
//   price: 30000,
//   shipping: 2000,
//   total() {
//     let self = this;
//     let tax = 3000;
//     function specialDiscount() {
//       if (self.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }

//     return this.price + this.shipping + tax - specialDiscount();
//   }
// };

// ==== context argument
let computer = {
  price: 30000,
  shipping: 2000,
  total(context) {
    let tax = 3000;
    function specialDiscount(context) {
      if (context.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount(this);
  }
};

console.log(computer.total()); //34000

