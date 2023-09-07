function isRealPalindrome(inputStr) {
  let testStr = inputStr.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
  const output = testStr === testStr.split('').reverse().join('');
  console.log(output);
  return output;
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
