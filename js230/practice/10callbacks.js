// https://launchschool.com/lessons/519eda67/assignments/2b84bd15
// lesson 2 assignment 17

// #region Problem 1
const p1 = function() {

  function basicCallback(callback, num) {
    setTimeout(() => {
      callback(num);
    }, 2000);
  }

  basicCallback((number) => {
    console.log(number * 2);
  }, 5);

};

// p1();
// #endregion

// #region Problem 2
const p2 = function() {

  function downloadFile() {
    console.log('Downloading file...');
    setTimeout(() => {
      console.log('Download complete!');
    }, 1500);
  }

  downloadFile();
};

// p2();
// #endregion

// #region Problem 3
const p3 = function () {

  function processData(array, callback) {
    setTimeout(() => {
      console.log(array.map(element => callback(element)));
    }, 1000);
  }

  // Example usage:
  processData([1, 2, 3], (number) => number * 2);
  // After 1 second, logs: [2, 4, 6]
};

// p3();
// #endregion

// #region Problem 4
const p4 = function () {

  function waterfallOverCallbacks(array, num) {
    let result = num;
    array.forEach(fct => {
      result = fct(result)
    });
    console.log(result);
    return result;
  }

  // Example usage:
  const double = (x) => x * 2;
  waterfallOverCallbacks([double, double, double], 1);
  // Logs: 8

};
// p4();
// #endregion

// #region Problem 5
const p5 = function () {

  function startCounter(callback) {
    let count = 1;

    let id = setInterval(() => {
      if (!callback(count)) {
        count += 1;
      } else clearInterval(id);
    }, 1000);
  }

  // Example usage:
  startCounter((count) => {
    console.log(count);
    return count === 5;
  });
  // Logs 1, 2, 3, 4, 5, then stops

};

// p5();
// #endregion


