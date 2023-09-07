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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
