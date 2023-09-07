function stringToSignedInteger(str) {
  const DIGITS = '0123456789';
  let chars = str.split('');
  let sign = '+';
  if (str[0] === '+' || str[0] === '-') sign = chars.shift();

  let output = 0;
  chars.forEach((char, idx) => {
    output = output * 10 + DIGITS.indexOf(char);
  });
  if (sign === '-') output *= -1;
  return output;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
