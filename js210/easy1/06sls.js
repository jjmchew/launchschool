function shortLongShort(str1, str2) {
  let a = str1;
  let b = str2;

  if (a.length > b.length) [a, b] = [b, a];
  return a + b + a;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
