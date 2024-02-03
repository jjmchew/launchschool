// https://launchschool.com/exercises/7555977a
// from events and async problems, problem 1

// #region V1
function randomizer(...callbacks) {
  const totalSecs = callbacks.length * 2;

  function exec(callback) {
    return new Promise(res => {
      setTimeout(() => res(callback()), 1000);
    });
  }

  async function countTime() {
    for (let i = 1; i <= totalSecs; i += 1) {
      await exec(() => console.log(i));
    }
  }

  function randomTime() {
    return Math.random() * totalSecs * 1000;
  }

  function setCallbacks() {
    callbacks.forEach(callback => {
      setTimeout(() => callback(), randomTime());
    });
  }

  setCallbacks();
  countTime();
}
// #endregion


// Provided sample code
function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6