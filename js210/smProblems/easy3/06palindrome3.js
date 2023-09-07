function isPalindromicNumber(num) {
  const output = String(num).split('').reverse().join('') === String(num);
  console.log(output);
  return output;
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
