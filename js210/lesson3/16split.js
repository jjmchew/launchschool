function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR:  No delimiter');
    return;
  }
  if (delimiter === '') console.log('no delimiter');

  let word = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== delimiter) {
      word += string[i];
    }
    if (string[i] === delimiter || delimiter === '') {
      console.log(word);
      word = '';
    }
  }
  if (delimiter !== '') console.log(word);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world
console.log('================');

splitString('hello');
// logs:
// ERROR: No delimiter
console.log('================');

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o
console.log('================');

splitString('hello', ';');
// logs:
// hello
console.log('================');

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
//  (this is a blank line)
console.log('================');

