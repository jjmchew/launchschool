palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

function palindromes(str) {
  let substrings = [];
  for (let i1 = 0; i1 < str.length + 1; i1 += 1) {
    for (let i2 = i1 + 1; i2 < str.length + 1; i2 += 1) {
      let substring = str.slice(i1, i2);
      if (isPalindrome(substring)) substrings.push(substring);
    }
  }
  console.log(substrings);
  return substrings;
}

function isPalindrome(str) {
  if (str.length === 1) return false;
  let reversed = str.split('').reverse().join('');
  return reversed === str;
}

console.log(isPalindrome('a'));
console.log(isPalindrome('ada'));
console.log(isPalindrome('adam'));