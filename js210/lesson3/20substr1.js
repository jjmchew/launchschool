function substr(string, start, length) {
  if (start < 0) start = string.length + start;

  let newStr = '';
  for (let i = start; i < string.length; i++) {
    if (i - start >= length) break;
    newStr += string[i];
  }

  return newStr;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
