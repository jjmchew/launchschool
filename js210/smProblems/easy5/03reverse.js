function reverseNumber(num) {
  let output = Number(String(num).split('').reverse().join(''));
  console.log(output);
  return output;
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1
