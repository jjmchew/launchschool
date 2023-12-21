// let promise1 = Promise.resolve(3);
// let promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, "foo"));
// let promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result))
// );




let promise1 = Promise.reject(1);
// let promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// let promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
let promise2 = Promise.reject(2);
let promise3 = Promise.reject(3);
let promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value))
  .catch(msg => console.log(msg));