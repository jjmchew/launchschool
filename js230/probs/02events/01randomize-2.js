// 2nd attempt - after looking at LS solution

function randomizer(...callbacks) {
  let maxSeconds = callbacks.length * 2;

  let time = 0;
  let timeLogger = setInterval(() => {
    console.log(time + 1);
    time += 1;
    if (time === maxSeconds) clearInterval(timeLogger);
  }, 1000);

  for (let i = 0; i < callbacks.length; i += 1) {
    setTimeout(callbacks[i], Math.floor(Math.random() * maxSeconds * 1000));
  }
}

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