function substring(string, start, end) {
  if (start > end) [start, end] = [end, start];
  if (start === end) return '';
  if (end === undefined) end = string.length;
  if (isNaN(Number(start)) || start < 0) start = 0;
  if (isNaN(Number(end)) || end < 0) end = 0;
  if (start > string.length) start = string.length;
  if (end > string.length) end = string.length;

  let newStr = '';
  for (let i = start; i < end; i++) {
    newStr += string[i];
  }
  return newStr;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
