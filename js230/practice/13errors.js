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

test4();
// #endregion

// #region TEST5
const test5 = function () {

};
// test5();
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