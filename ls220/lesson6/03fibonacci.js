// #region Version 1 - no optimization
// function fibonacci(n) {
//   if (n === 1 || n === 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// #endregion

// #region Version 2 - with cache (same signature)
function fibonacci(n) {
  return fibonacciHelper(n, {});
}

function fibonacciHelper(n, cache) {
  if (n <= 2) return 1;

  if (!cache[n - 1]) cache[n - 1] = fibonacciHelper(n - 1, cache);
  if (!cache[n - 2]) cache[n - 2] = fibonacciHelper(n - 2, cache);
  return cache[n - 1] + cache[n - 2];
}
// #endregion

console.log(fibonacci(40));
