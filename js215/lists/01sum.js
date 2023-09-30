function sum(num) {
  let digits = String(num).split('')
                          .map(char => parseInt(char, 10));
  let output = digits.reduce((sum, digit) => sum + digit);
  console.log(output);
  return output;
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45