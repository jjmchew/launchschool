/*
Note:
- this version doesn't quite meet requirements:
  - the callbacks provided were supposed to execute randomly at each second interval, but the second that elapsed *still needs to be logged to screen*
  - the callback doesn't "replace" the logged second
*/
function randomizer(...callbacks) {
  let randomNum = n => {
    return Math.floor(Math.random() * n);
  };

  let num = 0;
  let logNum = () => {
    return function logNumReturn() {
      num += 1;
      console.log(num);
    };
  };

  let makeArray = () => {
    let allIndexes = [...callbacks];
    for (let i = 0; i < callbacks.length; i += 1) {
      allIndexes.push(logNum());
    }
    return allIndexes;
  };

  let randomize = sourceArray => {
    let allFunctions = sourceArray.slice();
    let randomCallbacks = [];
    for (let i = 0; i < sourceArray.length; i += 1) {
      let random = randomNum(allFunctions.length);
      randomCallbacks.push(allFunctions[random]);
      allFunctions.splice(random, 1);
    }
    return randomCallbacks;
  };

  let randomCallbacks = randomize(makeArray());
  console.log(randomCallbacks[1]);
  let idx = 0;

  let executer = setInterval(() => {
    randomCallbacks[idx]();
    idx += 1;
    
    if (idx === randomCallbacks.length) clearInterval(executer);
  }, 1000);
}




// provided test code
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