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
function retryOperation(operationFunc) {
  let attempts = 0;

  function attempt() {
    return operationFunc().then(msg => console.log(msg))
                          .catch((err) => {
                            if (attempts < 2) {
                              attempts++;
                              console.log(`Retry attempt #${attempts}`);
                              return attempt(); // This return is from the callback in the catch block
                            } else {
                              throw err;
                            }
                          });
  }

  return attempt().catch(() => console.error("Operation failed"));
}
// #endregion

// Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.9
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);

