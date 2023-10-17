// Problem 1
// function subtract(a, b) {
//   return a - b;
// }

// function makeSub() {
//   // implement this function using partial function application
//   return function(a) {
//     console.log(subtract(a, 5));
//     return subtract(a, 5);
//   }
// }

// const sub5 = makeSub();

// sub5(10); // 5
// sub5(20); // 15



// Problem 2
// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(n) {
//   // implement this function using partial function application
//   return function(a) {
//     console.log(subtract(a, n));
//     return subtract(a, n);
//   }
// }

// const sub4 = makeSubN(4);
// const sub7 = makeSubN(7);

// sub4(10); // 6
// sub4(20); // 16
// sub7(10); // 3
// sub7(20); // 13
 



// Problem 3
// function makePartialFunc(func, b) {
//   // implement this function...
//   return function(a) {
//     console.log(func(a, b));
//     return func(a, b);
//   }
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// let multiplyBy5 = makePartialFunc(multiply, 5);
// let divideBy2 = makePartialFunc(divide, 2);

// multiplyBy5(100); // 500
// divideBy2(100); // 50




// Problem 4
// closures make it possible for `multiplyBy5` to retain access to `func` and `b` after `makePartialFunc` has finished execution





// Problem 5
let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  // implement this function...
  return function(students) {
    return rollCall('Math', students);
  };
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan

