function rot13(string) {
  const ROTATION = 13;
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function rotate(char) {
    let convert;
    let first = ALPHABET[0]
    let last = ALPHABET[ALPHABET.length - 1];

    if (char >= first && char <= last) {
      convert = ALPHABET;
    } else if (char >= first.toLowerCase() && char <= first.toLowerCase()) {
      convert = ALPHABET.toLowerCase();
    } else return char;

    let idx = (convert.indexOf(char) + ROTATION) % ALPHABET.length;
    return convert[idx];
  }

  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    newStr += rotate(string[i]);
  }
  return newStr;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.

console.log(rot13("[\\]^_`") === "[\\]^_`"); // false; should be true
console.log(rot13("{|}~") === "{|}~");       // false; should be true

