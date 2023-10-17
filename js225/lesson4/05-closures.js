// Problem 1
// function makeMultipleLister(multiple) {
//   return function() {
//     for (let num = multiple; num < 100; num += multiple) {
//       console.log(num);
//     }
//   }
// }

// let lister = makeMultipleLister(13);
// lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91




// Problem 2
// function makeCounters() {
//   let total = 0;
//   let add = num => total += num;
//   let subtract = num => total -= num;
//   return [add, subtract];
// }

// let [ add, subtract ] = makeCounters();

// console.log(add(1));
// // 1
// console.log(add(42));
// // 43
// console.log(subtract(39));
// // 4
// console.log(add(6));
// // 10




// Problem 3
function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
// let systemStatus = // ?
// It's not possible to set systemStatus to `status` without changing `startup` in any way
