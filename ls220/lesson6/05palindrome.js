// Given a string, determine whether it is a valid palindrome or not.

// A palindrome string is a string that reads the same backwards as forwards.

// Input: "madam"
// Output: true

// Input: "abcbea"
// Output: false

// #region Version 1 (works, but could be more efficient)
// function isValidPalindrome(string) {
//   if (string.length === 0) return true;
//   if (string.length === 1) return true;

//   let last = string.length - 1;
//   console.log(string[0], string[last], string.slice(1, last));
//   if (string[0] === string[last] &&
//       isValidPalindrome(string.slice(1, last)) ) return true;
//   else return false; 
// }
// #endregion

// #region - Version 2 - optimized
//   - uses pointers and has more concise code structure (i.e., use of return rather than if)
function isValidPalindrome(string) {
  return isValidPalindromeHelper(string, 0, string.length - 1);
}

function isValidPalindromeHelper(string, start, end) {
  if (end <= start) return true;
  return (
    string[start] === string[end] &&
    isValidPalindromeHelper(string, start + 1, end - 1)
  );
}
// #endregion


console.log(isValidPalindrome('') === true);
console.log(isValidPalindrome('a') === true);
console.log(isValidPalindrome('aa') === true);
console.log(isValidPalindrome('abcba') === true);
console.log(isValidPalindrome('abcbea') === false);
console.log(isValidPalindrome('racecar') === true);