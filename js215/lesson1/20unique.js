function isAllUnique(string) {
  let returnVal = true;
  let chars = string.replaceAll(/\ /g, '')
                    .split('')
                    .map(char => char.toLowerCase())
                    .sort();
  console.log(chars);
  for (let i = 1; i < chars.length; i += 1) {
    if (chars[i] === chars[i - 1]) returnVal = false;
  }
  console.log(returnVal);
  return returnVal;
}

isAllUnique('The quick brown fox jumped over a lazy dog');  // false
isAllUnique('123,456,789');                                 // false
isAllUnique('The big apple');                               // false
isAllUnique('The big apPlE');                               // false
isAllUnique('!@#$%^&*()');                                  // true
isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true