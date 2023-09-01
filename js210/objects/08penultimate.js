function penultimate(string) {
  let words = string.split(' ');
  // return string.split(' ')[-2];
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

/*
This will not work since negative indexes in bracket notation do not return elements from the end of the array.
Both invocations of the function will return undefined.
*/
