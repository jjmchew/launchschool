function integerToString(num) {
  const DIGITS = '0123456789';
  let chars = [];
  do {
    let digit = num % 10;
    chars.push(DIGITS[digit]);
    num = (num - digit) / 10;
  } while (num > 0);
  return chars.reverse().join('');
}

function signedIntegerToString(num) {
  if (num < 0) return '-' + integerToString(Math.abs(num));
  else if (num > 0) return '+' + integerToString(num);
  else if (Object.is(num, -0)) return '-0';
  else return '0';
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"


console.log(signedIntegerToString(-0) === "-0");

