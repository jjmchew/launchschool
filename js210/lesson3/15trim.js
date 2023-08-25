let trim = function(str) {

  let startIdx = 0;
  while (str[startIdx] === ' ') {
    startIdx += 1;
  }

  let finishIdx = str.length - 1;
  while (str[finishIdx] === ' ') {
    finishIdx -= 1;
  }

  if (startIdx === str.length || finishIdx === -1) return '';

  let newStr = '';
  for (let i = startIdx; i <= finishIdx; i++) {
    newStr += str[i];
  }

  return newStr;
};

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
console.log(trim(' '));         // ""
