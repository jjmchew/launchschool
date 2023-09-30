/*
Our recursive fibonacci function from the previous exercise is not very efficient. It starts slowing down with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.
*/

/*
elapsed: 13 mins


*/

// Basic version (uses external fib memo)
// let fib = [0n, 1n, 1n];
// function fibonacci(index) {
//   if (fib[index]) return fib[index];
//   else {
//     fib.push(BigInt(fibonacci(index - 2n)) + BigInt(fibonacci(index - 1n)));
//   }
//   return fib[index];
// }

// Uses IIFE and memo
// Immediately Invoked Function Expression
let fibonacci = (function() {
  let fibNums = [0, 1, 1];

  return fib = (index) => {
    fibNums[index] = fibNums[index] || BigInt(fib(index - 2n)) + BigInt(fib(index - 1n));
    return fibNums[index];
  };
}());

// console.log(fibonacci(4n));
console.log(fibonacci(5n));
console.log(fibonacci(20n) === 6765n);
console.log(fibonacci(50n) === 12586269025n);
console.log(fibonacci(75n) === 2111485077978050n);
console.log(fibonacci(78n));
console.log(fibonacci(100n));
// console.log(fibonacci(100000n));





