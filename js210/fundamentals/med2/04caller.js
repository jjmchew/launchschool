function makeDoubler(name) {
  function doubler(number, caller) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }

  return function(num) { return doubler(num, name) };
}

const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.
