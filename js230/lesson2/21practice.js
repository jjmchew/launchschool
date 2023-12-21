// Q1
let flakyService = () => {
  return new Promise((resolve, reject) => {
    let randomNum = Math.floor(Math.random() * 100 + 1);
    setTimeout(() => {
      if (randomNum % 2 === 0) resolve('Operation successful');
      else reject('Operation failed');
    }, 2000);
  });
}

// flakyService().then(msg => console.log(msg))
//               .catch(() => console.log('An error occurred.'));


// Q2

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

// fetchUserData().catch(obj => console.log(obj.error))
//                .finally(() => console.log('Fetching complete'));


// Q3
// #region Version 1 - doesn't work
// function retryOperation(operationFunc) {
//   for (let attempt = 0; attempt <= 2; attempt += 1) {
//     operationFunc().then(msg => {
//       console.log(msg);
//       attempt = 3;
//     })
//       .catch(() => {
//       console.log(`Attempt #${attempt} failed`);
//     });
//   }
// }
// #endregion

// #region LS solution
// function retryOperation(operationFunc) {
//   let attempts = 0;

//   function attempt() {
//     return operationFunc().then(msg => console.log(msg))
//                           .catch((err) => {
//                             if (attempts < 2) {
//                               attempts++;
//                               console.log(`Retry attempt #${attempts}`);
//                               return attempt(); // This return is from the callback in the catch block
//                             } else {
//                               throw err;
//                             }
//                           });
//   }

//   return attempt().catch(() => console.error("Operation failed"));
// }
// #endregion

// #region Ver 3 - my attempt again
//   Doesn't work since I'm not waiting for the outcome of 'operationFunc' - I'm call that
//   function asynchronously (using Promises) so execution of each attempt is added to the 
//   task queue, not executed immediately / synchronously
// function retryOperation(operationFunc) {
//   let attemptCount = 1;

//   while (attemptCount <= 3) {
//     console.log(`attempt `, attemptCount);
//     operationFunc().then(() => console.log(`Attempt ${attemptCount} successful`))
//       .catch(()=> {
//         console.log(`Attempt ${attemptCount} failed`);
//     });
//     attemptCount += 1;
//   }

//   console.log('retryOperation end');
// }
// #endregion

// #region Ver 4 - another attempt (same as LS)
function retryOperation(operationFunc) {
  let count = 1;
  function attempt() {
    return operationFunc().then(msg=>console.log('attempt: ', count, msg))
      .catch(() => {
        if (count <= 2) {
          console.log('attempt ', count, ' failed');
          count += 1;
          return attempt()
        } else throw new Error(`Attempt ${count} failed`);
      })
  }
  return attempt().catch(()=> console.log('Operation failed', count));
}
// #endregion

// Example usage:
// retryOperation(
//   () =>
//     new Promise((resolve, reject) =>
//       Math.random() > 0.9
//         ? resolve("Success!")
//         : reject(new Error("Fail!"))
//     )
// );


// #region Q4
// function mockAsyncOp() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("Operation succeeded");
//       } else {
//         reject("Operation failed");
//       }
//     }, 1000);
//   });
// }

// function wrapOp() {
//   mockAsyncOp().then(msg => console.log(msg))
//     .catch(msg => console.log(msg))
//     .finally(() => console.log('Operation attempted'));
// }

// wrapOp();
// #endregion


// Q5
function loadData() {
  return new Promise( (res, rej) => {
    setTimeout(()=> {
      if (Math.random() > 0.5) return res('Data loaded');
      else return rej('Network error');
    }, 1000);
  });
}

loadData().then(msg => console.log(msg))
  .catch(msg => {
  console.log(msg);
  console.log('Using cached data');
});
