// Q1

// #region myAnswer
// function downloadFilePromise() {
//   console.log('Downloading file...');
//   let promise = new Promise( (resolve, reject) => {
//     setTimeout(()=> { resolve('Download comlete!') }, 1500);
//   })
//   promise.then(msg => console.log(msg));
// }
// #endregion

// #region LSsolution
function downloadFilePromise() {
  return new Promise(resolve => {
    console.log('Downloading file...');
    setTimeout(()=> {
      resolve('Download complete!');
    }, 1500);
  }).then(msg => console.log(msg));
}
// #endregion

// downloadFilePromise();


// Q2
function processDataPromise(array) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(array.map(num => num * 2));
    }, 1000);
  });
}

// Example usage:
// processDataPromise([1, 2, 3]).then((processedNumbers) => {
//   console.log(processedNumbers);
//   // After 1 second, logs: [2, 4, 6]
// });


// Q3
let flakyService = () => {
  return new Promise((resolve, reject) => {
    let randomNum = Math.floor(Math.random() * 100 + 1);
    setTimeout(() => {
      if (randomNum % 2 === 0) resolve('Operation successful');
      else reject('Operation failed');
    }, 2000);
  });
}

// flakyService().then(msg => console.log('success: ', msg))
              // .catch(msg => console.log('fail: ', msg));


// Q4
// flakyService().catch(msg => console.log(msg))
//               .finally(()=> console.log('clean-up actions'));


// Q5
new Promise(resolve => {
  resolve(3);
}).then(num => (num * 2))
  .then(num => (num + 50))
  .then(num => console.log(num));
