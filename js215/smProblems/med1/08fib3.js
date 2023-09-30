/*

In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

Examples:
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
Note that JavaScript can accurately compute integers up to 16 digits long; this means that fibonacci(78) is the largest Fibonacci number that you can accurately compute with simple operations in JavaScript.

*/

/*
elapsed: 8 minutes


*/

console.log(fibonacci(20n) === 6765n);
console.log(fibonacci(50n) === 12586269025n);
console.log(fibonacci(75n) === 2111485077978050n);
console.log(fibonacci(78n));
console.log(fibonacci(100n));
// console.log(fibonacci(100000n));

function fibonacci(index) {
  if (index <= 2n) return 1n;

  let [ previous1, current ] = [1n, 1n];
  for (let i = 3n; i <= index; i += 1n) {
    [ previous1, current ] = [ current, previous1 + current ];
  }

  return current;
}
