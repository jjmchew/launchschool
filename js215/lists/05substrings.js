leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(inputStr) {
  let substrings = inputStr.split('').map((_, index) => {
    return inputStr.slice(0, index + 1);
  });
  console.log(substrings);
  return substrings;
}