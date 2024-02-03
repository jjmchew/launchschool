// https://launchschool.com/lessons/519eda67/assignments/5e87f026
// lesson 2 assignment 21

// #region Problem 1
const p1 = function () {

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
  .catch(err => console.log('An error occurred'));

};
// p1();
// #endregion

// #region Problem 2
const p2 = function () {

  function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject({ error: "User not found" }), 500);
    });
  }

  fetchUserData()
  .catch(err => console.log(err.error))
  .finally(() => console.log('Fetching complete'));
};

// p2();
// #endregion

// #region Problem 3
const p3 = function () {

  // #region my version
  // function retryOperation(operationFunc) {
  //   let count = 0;
    
  //   let attempt = function () {
  //     console.log('starting attempt ', count);
  //     count += 1;
      
  //     return operationFunc()
  //     .then(console.log)
  //     .catch(err => {
  //       console.log(`Attempt ${count} failed`);
  //       if (count < 3) {
  //         attempt(); // THIS LINE is key
  //       } else {
  //         console.log(err.message, ' Operation failed');
  //         throw err;
  //       }
  //     });

  //   };
  //   return attempt().catch(err => console.log('Operation failed'));
  // }
  // #endregion

  // #region LS solution
  function retryOperation(operationFunc) {
    let attempts = 0;
  
    let attempt = function() {
      return operationFunc()
      .then(console.log)
      .catch((err) => {
        if (attempts < 3) {
          attempts++;
          console.log(`Retry attempt #${attempts}`);
          return attempt();
        } else {
          throw err;
        }
      });
    }
  
    return attempt().catch(() => console.error("Operation failed!"));
  }
  // #endregion

  // Example usage:
  retryOperation(
    () =>
      new Promise((resolve, reject) =>
        Math.random() > 0.8
          ? resolve("Success!")
          : reject(new Error("Fail!"))
      )
  );

};
// p3();
// #endregion

// #region LS solution (Problem 3)
const ls = function () {
  function retryOperation(operationFunc) {
    let attempts = 0;
  
    let attempt = function() {
      return operationFunc()
      .then(console.log)
      .catch((err) => {
        if (attempts < 3) {
          attempts++;
          console.log(`Retry attempt #${attempts}`);
          return attempt();
        } else {
          throw err;
        }
      });
    };
  
    return attempt().catch(() => console.error("Operation failed!"));
  }

  // Example usage:
  retryOperation(
    () =>
      new Promise((resolve, reject) =>
        Math.random() > 0.8
          ? resolve("Success!")
          : reject(new Error("Fail!"))
      )
  );
}
// ls();
// #endregion

// #region Problem 5
const p5 = function () {
  function loadData() {
    return new Promise((res, rej) => {
      Math.random() > 0.8
        ? res('Data loaded')
        : rej(new Error('Network error'));
    })
    .catch(err => {
      console.log(err.message, ' using cached data');
      return Promise.resolve('Using cached data');
    });
  }

  loadData()
  .then(console.log);

};
p5();
// #endregion

// #region catch TEST
const test = function () {

  function flakyOp() {
    return new Promise((res, rej) => {
      Math.random() > 0.8
        ? res('success')
        : rej(new Error('fail'))
    });
  }

  let count = 0;
  
  function attempt() {
    return flakyOp()
    .then(console.log)
    .catch(err => {
      count += 1;
      console.log('attempt ', count, err.message);
      if (count < 3) attempt();
      else throw err;
      // else console.log('ERROR');
    });
  }

  attempt().catch(err => console.log('final ', err.message));
};

// test();
// #endregion

// #region TEST2
const test2 = function () {

  function promise() {
    return new Promise((res,rej) => {
      // throw new Error('random error');
      // rej(new Error('promise error'));
      return new Error('promise error');
    }).catch(err => {
      throw err;
    });
  }
  
  console.log('test2');

  promise()
  // .then(msg => {
  //   console.log('then', msg.message);
  //   throw new Error('then error');
  // })
  .catch(msg => console.log('catch', msg.message))
  .finally(() => console.log('finally'));

};
// test2();
// #endregion

// #region TEST3
const test3 = function () {
  function promise() {
    return new Promise((res, rej) => {
      rej(new Error('fail!'));
    });
  }

  function retryOperation(operationFunc) {
    let attempts = 0;

    let attempt = function () {
      console.log('attempt called');

      return operationFunc()
        .then(msg => console.log('attempt then ', msg))
        .catch(err => {
          // attempt();
        });
    };

    return attempt()
      .then(msg => console.log('return then ', msg))
      .catch(() => console.log('Operation failed'));
  }

  console.log('test3');
  retryOperation(promise);
};

// test3();
// #endregion

// #region TEST4
const test4 = function () {
  function operationFunc() {
    return new Promise((resolve, reject) => {
      Math.random() > 1.5
      ? resolve("Success!")
      : reject(new Error("Fail!"))
    });
  }

  function retryOperation(operationFunc) {
    let attempts = 0;

    let attempt = function () {
      return operationFunc()
        .then(msg => console.log('attempt then ', msg))
        .catch(async err => {
          if (attempts < 3) {
            attempts += 1;
            console.log('calling attempt ', attempts);
            await new Promise(res => setTimeout(res, 1000));
            attempt();
          } 
          // else throw err;
        })
        .catch(err => console.log('2nd catch ', err.message));
    };

    return attempt()
      .then(msg => console.log('return then ', msg))
      .catch(() => console.log('Operation failed'));
  }

  console.log('test4');
  retryOperation(operationFunc);
};

// test4();
// #endregion

// #region TEST5
const test5 = function () {

  function operationFunc() {
    return new Promise((resolve, reject) => {
      reject(new Error("Fail!"))
    });
  }
  
  function retryOperation(operationFunc) {
    let attempts = 0;
  
    let attempt = function () {
      // throw new Error ('my error'); // ** LINE D **
      return operationFunc()
        .then(msg => console.log('operationFunc then ', msg))
        .catch(async err => {
          if (attempts < 3) {
            attempts += 1;
            console.log('calling attempt ', attempts);
            return attempt();  // ** LINE A **
          }
          else throw err;
        })
        // .catch(err => console.log('2nd operationFunc catch ', err.message)); // ** LINE C **
    };
  
    return attempt()  // ** Expanded LINE B **
      .then(msg => console.log('LINE B then ', msg))
      .catch(() => console.log('Operation failed'));
  }
  
  retryOperation(operationFunc);

};
// test5();
// #endregion

// #region TEST 6 : using async / await
const test6 = function () {

  function promise() {
    return new Promise((res, rej) => {
      let num = Math.random();
      num > 0.8
        ? res(num)
        : rej(new Error('promise error'));
    });
  }

  async function attempt() {
    for (let i = 1; i <= 3; i += 1) {
      try {
        let result = await promise();
        console.log('try: ', result);
        break;
      } catch (err) {
        if (i < 3) console.log('attempt ', i, ' failed. ', err.message, '  trying again');
        else console.log('attempt ', i, ' failed. Operation failed.');
      }
    }
    console.log('all operations complete');
  }
  
  console.log('test6');
  attempt();

};
// test6();
// #endregion

// #region RECURSION
const recursion = function () {

  function logNumber() {
    let num = Math.random();
    if (num > 0.8) return num;
    else throw new Error('logNumber error');
  }

  function retry(operationFunc) {
    let attempts = 0;

    function attempt() {
      console.log('attempt ', attempts);
      return (function() {
        try {
          console.log('success: ', operationFunc());
        } catch (err) {
          if (attempts < 3) {
            attempts += 1;
            console.log('retry attempt ', attempts);
            attempt();
          } else {
            throw err;
          }
        }
      })();
    }

    return (function () {
      try {
        attempt()
      } catch (err) {
        console.log('final catch: ', err.message);
        return err;
      }
    })();
  }

  console.log('recursion');
  retry(logNumber);
}
// recursion();
// #endregion

// #region callback
const callback = function () {

  let sleep = (secs, callback) => setTimeout(callback, 1000 * secs);

  console.log('callback');

  function step1(callback) {
    sleep(1, function() {
      let data = 'A1';
      console.log('step1', data);
      callback(data);
    });
  }

  function step2(data, callback) {
    sleep(1, () => {
      let result = data + 'B2';
      console.log('step2', result);
      callback(result);
    });
  }

  function step3(data, callback) {
    sleep(1, () => {
      let result = data + 'C3'
      console.log('step3', result);
      callback(result);
    });
  }

  let final;
  step1(data => {
    step2(data, result => {
      step3(result, result => {
        final = result;
        console.log('the final result is ', final);
      })
    });
  });


};
// callback();
// #endregion

// #region callback2
const callback2 = function () {

  let sleep = (secs, callback) => {
    setTimeout(() => {
      if (Math.random() > 0.8) callback;
      else throw new Error('random error');
    }, 1000 * secs);
  };

  console.log('callback2');

  function step1(callback) {
      sleep(1, function() {
        let data = 'A1';
        console.log('step1', data);
        callback(data);
      });
  }

  function step2(data, callback) {
    sleep(1, () => {
      let result = data + 'B2';
      console.log('step2', result);
      callback(result);
    });
  }

  function step3(data, callback) {
    sleep(1, () => {
      let result = data + 'C3'
      console.log('step3', result);
      callback(result);
    });
  }

  let final;
  step1(data => {
    step2(data, result => {
      step3(result, result => {
        final = result;
        console.log('the final result is ', final);
      })
    });
  });


};
// callback2();
// #endregion

// #region PROMISE
const promise = function () {
  let sleep = (secs, callback) => setTimeout(callback, 1000 * secs);

  function step1() {
    return new Promise(res => {
      sleep(1, () => {
        let data = 'A1';
        console.log('step1', data);
        res(data);
      });
    });
  }

  function step2(data) {
    return new Promise(res => {
      sleep(1, () => {
        let result = data + 'B2';
        console.log('step2', result);
        res(result);
      });
    });
  }

  function step3(data) {
    return new Promise(res => {
      sleep(1, () => {
        let result = data + 'C3';
        console.log('step3', result);
        res(result);
      });
    });
  }

  step1()
    .then(step2)
    .then(step3)
    .then(result => console.log('the final result is ', result));
};
// promise();
// #endregion


