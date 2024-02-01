// https://launchschool.com/lessons/519eda67/assignments/c1f5bc94
// lesson 2 assignment 2

// Problem 1
const p1 = function() {

  function startCounting() {
    let counter = 1;

    return setInterval(() => {
      console.log(counter);
      counter += 1;
    }, 1000);
  }

  const id = startCounting();

  setTimeout(() => clearInterval(id), 10500);
};

// p1();

// Problem 2
const p2 = function() {

  function startCounting() {
    let counter = 1;
    let id = setInterval(() => {
      console.log(counter);
      counter += 1;
    }, 1000);

    return {
      stopCounting: function() {
        clearInterval(id);
      }
    };
  }

  let count = startCounting();

  setTimeout(()=> count.stopCounting(), 5500);

};

// p2();