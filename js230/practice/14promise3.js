// https://launchschool.com/lessons/519eda67/assignments/2f41b3a1
// lesson 2, assignment 23

// #region Problem 1
const p1 = function () {

  function flakyService() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve("Operation successful");
      } else {
        reject("Operation failed");
      }
    });
  }
  
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

  Promise.all([flakyService(), flakyService(), loadData()])
      .then(results => results.forEach(result => console.log(result)))
      .catch(() => console.log('One or more operations failed.'));

};
// p1();
// #endregion

// #region Problem 2
const p2 = function () {
  const firstResource = new Promise((resolve) =>
    setTimeout(() => resolve("First resource loaded"), 500)
  );
  const secondResource = new Promise((resolve) =>
    setTimeout(() => resolve("Second resource loaded"), 1000)
  );

  Promise.race([firstResource, secondResource])
    .then(result => console.log(result));
};

// p2();
// #endregion

// #region Problem 3
const p3 = function () {

  function flakyService() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve("Operation successful");
      } else {
        reject("Operation failed");
      }
    });
  }

  Promise.allSettled([flakyService(), flakyService(), flakyService()])
    .then(results => console.log(results));
}

// p3();
// #endregion

// #region Problem 4
const p4 = function () {
  console.log('p4');

  function flakyService() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve("Operation successful");
      } else {
        reject("Operation failed");
      }
    });
  }

  function loadData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // loadData always resolves this time
        resolve("Data loaded");
      }, 1000);
    });
  }

  const primaryOperation = flakyService();
  const fallbackOperation = loadData();

  Promise.any([primaryOperation, fallbackOperation])
    .then(console.log);
}
// p4();
// #endregion


// #region Problem 4 - alternate
// This solution guarantees flakyService is tried first and then loadData is used afterwards
const p4alt = function () {
  function flakyService() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve("Operation successful");
      } else {
        reject("Operation failed");
      }
    });
  }

  function loadData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // loadData always resolves this time
        resolve("Data loaded");
      }, 1000);
    });
  }

  async function loadResources() {
    let output;
    try {
      await flakyService().then(data => output = data);
    } catch (err) {
      await loadData().then(data => output = data);
    }
    return output;
  }

  loadResources().then(console.log);
};
// p4alt();
// #endregion

// #region Problem 5
const p5 = function () {
  function loadMultipleResources(urls) {
    let urlsPromise = urls.map(url => fetch(url).then(response => response.json()).catch(() => 'Failed to fetch'));

    return Promise.allSettled(urlsPromise);
  }

  loadMultipleResources([
    "https://jsonplaceholder.typicode.com/todos/1",
    "invalidUrl",
  ]).then((results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Fetched data:", result.value);
      } else {
        console.error(result.reason);
      }
    });
  });

  // Fetched data: {userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  // Fetched data: Failed to fetch
}
// p5();
// #endregion

// #region test
const test = function () {
  throw('an error string');
  console.log('test');
};
// test();
// #endregion


