substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function substrings(inputStr) {
  let substrings = [];
  for (let i1 = 0; i1 < inputStr.length + 1; i1 += 1) {
    for (let i2 = i1 + 1; i2 < inputStr.length + 1; i2 += 1) {
      substrings.push(inputStr.slice(i1, i2));
    }
  }
  console.log(substrings);
  return substrings;
}