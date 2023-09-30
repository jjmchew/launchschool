/*
  for '321': create array of digits [1, 2, 3]
*/

function octalToDecimal(numberString) {
  const OCTAL_BASE = 8;
  let digits = numberString.split('').reverse().map(str => parseInt(str, 10));
  let output = digits.reduce((output, digit, index) => output += digit * (Math.pow(OCTAL_BASE, index)), 0);
  console.log(output);
  return output;
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9