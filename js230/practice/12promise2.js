// https://launchschool.com/lessons/519eda67/assignments/5afd1247
// lesson 2 assignment 19

// #region Problem 1
// see assignment 17 problem 2
const p1 = function() {

  function downloadFile() {
    return new Promise (res => {
      console.log('Downloading file...');
      setTimeout(() => {
        res('Download complete');
      }, 1500);
    });
  }

  downloadFile().then(res => console.log(res));
};
// p1();
// #endregion

// #region Problem 2
// see assignment 17 problem 3
const p2 = function () {

  function processDataPromise(array, callback) {
    return new Promise(res => {
      setTimeout(() => {
        res(array.map(callback));
      }, 1000);
    });
  }

  processDataPromise([1, 2, 3], num => num *2)
    .then(array => console.log(array));
};
// p2();
// #endregion

// #region Problem 3
const p3 = function () {
  const flakyService = function() {
    return new Promise((res, rej) => {
      
      setTimeout(() => {
        if (Math.random() > 0.4) rej(new Error('Operation failed'));

        res('Operation successful');
      }, 1000);
    });
  };

  flakyService()
  .then(msg => console.log(msg))
  .catch(err => console.log(err.message))
  .finally(() => console.log('Operation complete'));

};
// p3();
// #endregion

// #region Problem 5
const p5 = function() {
  const DELAY = 1500;

  function random() {
    return new Promise(res => {
      setTimeout(() => {
        res(Math.floor(Math.random() * 10) + 1);
      }, DELAY);
    })
  }

  function add5(num) {
    return new Promise(res => {
      setTimeout(() => {
        res(num + 5);
      }, DELAY);
    });
  }

  random()
  .then(num => {
    console.log(num);
    return new Promise(res => {
      setTimeout(() => {
        res(num * 2);
      }, DELAY);
    });
  })
  .then(num => {
    console.log(num);
    return add5(num);
  })
  .then(num => console.log('the final num is ', num))
  .then(() => console.log('final then'))
  .then(() => console.log('another then block'));
};
p5();
// #endregion