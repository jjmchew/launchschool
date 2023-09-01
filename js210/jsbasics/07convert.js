// Version 1 - kind of misunderstood the exercise
/*
function stringToInteger(str) {
  return str / 1;
}
*/

// Version 2
function stringToInteger(str) {
  const NUMS = '0123456789';
  let digits = str.split('');
  const lastIdx = digits.length - 1;

  let output = 0;
  for (let i = 0; i < digits.length; i++) {
    output += NUMS.indexOf(digits[lastIdx - i]) * (10 ** i);
  }
  return output;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
