// Version 1
/*
function crunch(str) {
  let newStr = '';
  let scanIndex = 1;
  for (let index = 0; index < str.length; ) {
    if (str[index] === str[scanIndex]) scanIndex += 1;
    else {
      newStr += str[index];
      index = scanIndex;
    }
  }
  return newStr;
}
*/

// Further Exploration
function crunch(str) {
  let regex = /(.)\1+/g;
  let newStr = str.replaceAll(regex, (...p) => {
    console.log(`match: ${p}`);
    return p[1];
  });
  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
console.log(crunch('...........'));
console.log(crunch('tthis   iiissss           a      wwwwwwweiiiirdddddd'));

/*
input
- str

output
- str

rules / assumptions
- all consecutive, repeated characters are 'collapsed' into a single char (doesn't matter how many repeats)
- the repeated char doesn't matter (e.g., collapse spaces, etc.)

approach
- initialize a blank output string
- iterate, starting at first char (index 0)
    - if next char is the same, increment scanIndex by 1
    - if next char is not the same, then stop scanning
  - add the character at the current scanIndex to the output string
    - increment the index to the current value of scanIndex
- return the output string

*/
