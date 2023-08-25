/*
  A is charCode 65
  Z is charCode 90

  a is charCode 97
  z is charCode 122
*/

function toLowerCase(string) {
  let convert = function(chr) {
    const CONVERSION = 32;
    let code = chr.charCodeAt(0) + CONVERSION;
    return String.fromCharCode(code);
  };

  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= 'A' && string[i] <= 'Z') {
      newStr += convert(string[i]);
    } else newStr += string[i];
  }

  return newStr;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
