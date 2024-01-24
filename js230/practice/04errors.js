let alwaysError = () => { throw new Error('always') };

const simAsync = function() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        res('hey');
      } else {
        rej(new Error('simAsync error'));
      }
    }, 1000);
  });
};

// #region case 1: always throws error
// alwaysError();
// #endregion


// #region case 2: always catch error
// try {
//   alwaysError();
// } catch (err) {
//   console.log('we caught this error: ', err.message);
// }
// #endregion


// #region **case 3: catch always runs (may catch simAsync error or always)
// simAsync().then(res => {
//   console.log('then ', res);
//   console.log('line 2');
//   alwaysError();
// })
// .catch(err => {
//   console.log('catch this ', err.message);
// })
// .finally(() => console.log('finally'));
// #endregion


// #region **case 4: only catches 'simAsync error' (always will never be caught)
// simAsync().then(res => {
//   console.log('then ', res);
//   console.log('line 2');
//   alwaysError();
// }, err => {
//   console.log('only catches ', err.message);
// });
// #endregion


// #region case 5: catch either
// note:  catch will catch the FIRST error (always), and a second async error will not be caught
// note:  try / catch blocks are inherently SYNCHRONOUS
// try {
//   simAsync().then(res => console.log('then ', res));
//   alwaysError();
// } catch (err) {
//   console.log('caught this error: ', err.message);
// } finally {
//   console.log('finally');
// }
// #endregion


// #region case 6: note that the catch block will NOT catch errors in simAsync (w/ or w/o the then method)
// try {
//   simAsync().then(res => console.log('then ', res));
// } catch (err) {
//   console.log('caught this error: ', err.message);
// } finally {
//   console.log('finally');
// }
// #endregion


// #region case 7: a catch BLOCK **CANNOT** catch async errors
// try {
//   simAsync();
// } catch (err) {
//   console.log('caught this error: ', err.message);
// } finally {
//   console.log('finally');
// }
// #endregion


// #region case 8: make try/catch block async using async/await
// async function test() {
//   try {
//     await simAsync();
//   } catch (err) {
//     console.log('caught this error: ', err.message);
//   } finally {
//     console.log('finally');
//   };
// }

// test();
// #endregion

// #region case 9: can catch EITHER error, but will catch the first (will wait for simAsync to execute)
async function test() {
  try {
    await simAsync();
    alwaysError();
  } catch (err) {
    console.log('caught this error: ', err.message);
  } finally {
    console.log('finally');
  };
}

test();
// #endregion
