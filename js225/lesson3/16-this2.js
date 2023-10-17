// Problem 1
// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod()); // returns undefined since 'this' will be 'myChildObject' which doesn't have property 'count'



// Problem 2
/*
possible solutions: 
1. use arrow function to maintain context ** WRONG ** - nested object has no context
2. use call to define execution context explicitly [worked]
3. bind context (using function expression) [worked]

*/

//solution 2
// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod.call(myObject)); 

//solution 3
// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod.bind(myObject)());




// Problem 3
// let person = {
//   firstName: 'Peter',
//   lastName: 'Parker',
//   fullName() {
//     console.log(this.firstName + ' ' + this.lastName +
//                 ' is the Amazing Spiderman!');
//   },
// };

// let whoIsSpiderman = person.fullName.bind(person);
// whoIsSpiderman(); // Peter Parker is the Amazing Spiderman!
                  // whoIsSpiderman executes person.fullName function with context bound to 'person'



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

// console.log(computer.total()); // 35000 (specialDiscount has global context when invoked and always returns 0)

// fix
let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(computer);
  }
};

console.log(computer.total()); // now logs 34000 - need to pass in context as 'computer' for 'this.price' to work