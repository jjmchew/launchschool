// https://launchschool.com/lessons/519eda67/assignments/be20d8f9
// lesson 2, assignment 1

// #region Problem 1
const p1 = function() {

  const delayLog = function () {
    for (let i = 1; i <= 10; i += 1) {
      setTimeout(() => {
        console.log(i);
      }, 1000 * i);
    }
  }

  delayLog();
};

// p1();
// #endregion

// #region Problem 1 alternate solution (promises)
const p1Alt = function() {
  let counter = 1;

  function count() {
    setTimeout(()=> {
      console.log('count: ', counter);
      counter += 1;
    }, 1000);
  }

  function promiseCount() {
    return new Promise(res => {
      setTimeout(() => {
        console.log('promise count: ', counter);
        counter += 1;
        res(counter);
      }, 1000);
    });
  }

  // count();

  promiseCount()
    .then(()=> {
      promiseCount()
        .then(()=> {
          promiseCount()
        });
    })
    .then(()=> {
      console.log('2nd then');
      promiseCount();
    });

};

// p1Alt();
/*

Notes:
- note that to get numbers to count properly (i.e., wait 1 sec before invoking function again)
that invocations need to be nested
- otherwise, invocations all happen at the same time
  - in the above, 2 & 3 happen at the same time, since they are both invoked at the same time based upon 
  the nesting of the `then` methods

*/
// #endregion

// #region Problem 1 another alternate (async/await)
const p1Alt2 = function() {

  function promiseCount(num) {
    return new Promise(res => {
      setTimeout(() => {
        console.log('promise count: ', num);
        num += 1;
        res(num);
      }, 1000);
    });
  }

  async function invokeCount() {
    let newNum = 1;
    newNum = await promiseCount(newNum);
    console.log('async1', newNum);
    newNum = await promiseCount(newNum);
    console.log('async2', newNum);
    newNum = await promiseCount(newNum);
    console.log('async3', newNum);
  }

  invokeCount();
  console.log('s1');
};
// p1Alt2();

/*

Notes:
- creating the `async` function `invokeCount` allows the use of `await` to halt subsequent code while waiting for the promise to resolve
- this means nested `.then` methods are NOT necessary - much easier

*/
// #endregion

// #region Problem 1 - another alternate (async/await loops)
const p1Alt3 = function () {

  function promiseCount(num) {
    return new Promise(res => {
      setTimeout(() => {
        console.log('promise count: ', num);
        num += 1;
        res(num);
      }, 1000);
    });
  }

  async function invokeCount() {
    for (let newNum = 1; newNum <= 10; newNum += 1) {
      await promiseCount(newNum);
      console.log('async ', newNum);
    }
    console.log('finished');
  }

  invokeCount();
  console.log('end');
};
p1Alt3();

/*
Notes:
- this solution is definitely the cleanest and easiest to follow:
  - no nesting
  - easy to invoke promiseCount and have the code "wait" - everything reads "in sequence" despite being asynchronous

*/
// #endregion

// #region Problem 2
const p2 = function() {

  setTimeout(() => {        // 1
    console.log('Once');    // 5
  }, 1000);                 
  
  setTimeout(() => {        // 2
    console.log('upon');    // 7
  }, 3000);                 
  
  setTimeout(() => {        // 3
    console.log('a');       // 6
  }, 2000);                 
  
  setTimeout(() => {        // 4
    console.log('time');    // 8
  }, 4000);                 

};
// #endregion

// #region Problem 3
const p3 = function () {

  setTimeout(() => {  // 10
    setTimeout(() => {
      q();   // 25
    }, 15);
  
    d();  // 10
  
    setTimeout(() => {
      n(); // 15
    }, 5);
  
    z();  // 10+
  }, 10);
  
  setTimeout(() => {
    s(); // 20
  }, 20);
  
  setTimeout(() => {
    f(); // 0 +
  });
  
  g(); // 0

};

// execution sequence:
// g f d z n s q

// #endregion

// #region Problem 4
const p4 = function() {

  function afterNSeconds(callback, secs) {
    setTimeout(callback, secs * 1000);
  }

};

// p4();
// #endregion