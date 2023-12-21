function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

// #region Q1
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}
// let promise1 = flakyService();
// let promise2 = flakyService();
// let promise3 = loadData();

// Promise.all([promise1, promise2, promise3]).then(array => console.log(array))
//   .catch(() => console.log('One or more operations failed'));
// #endregion


// #region Q2
// const firstResource = new Promise((resolve) =>
//   setTimeout(() => resolve("First resource loaded"), 500)
// );
// const secondResource = new Promise((resolve) =>
//   setTimeout(() => resolve("Second resource loaded"), 1000)
// );

// Promise.race([firstResource, secondResource]).then(msg => console.log(msg))
//   .catch(()=> console.log('all resources failed'));
// #endregion


// #region Q3
// const services = [flakyService(), flakyService(), flakyService()];

// Promise.allSettled(services).then(array => console.log(array));
// #endregion


// #region Q4
// function loadData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // loadData always resolves this time
//       resolve("Data loaded");
//     }, 1000);
//   });
// }

// const primaryOperation = flakyService();
// const fallbackOperation = loadData();

// Promise.any([primaryOperation, fallbackOperation]).then(console.log);
// #endregion


// #region Q5

function loadMultipleResources(urlArray) {
  let promiseArray = urlArray.map(url => {
    return fetch(url)
      .then(res => res.json()) // necessary since the response is a promise (also needs to resolve)
      // .catch(() => 'fetch error'); // seems unnecessary from LS solution
  });
  return Promise.allSettled(promiseArray);
}

loadMultipleResources([
  "invalidUrl",
  "https://jsonplaceholder.typicode.com/todos/1",
]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fetched data:", result.value);
    } else {
      console.error(result.reason);
    }
  });
  // console.log(results);
});

// #endregion