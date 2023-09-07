function isPalindrome(testStr) {
  let reversedStr = testStr.split('')
                           .reverse()
                           .join('');
  const output = reversedStr === testStr;
  console.log(output);
  return output;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
