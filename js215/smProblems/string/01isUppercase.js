isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

// FIRST Version - WAAAAY TOO COMPLICATED
// function isUppercase(string) {
//   const LETTER_A = 65;
//   const LETTER_Z = 90;

//   let returnVal = true;
//   for (let i = 0; i < string.length; i += 1) {
//     if (/[^a-z]/i.test(string[i])) continue;
//     if (string[i].charCodeAt() < LETTER_A || string[i].charCodeAt() > LETTER_Z) {
//       returnVal = false;
//       break;
//     }
//   }
//   console.log(returnVal);
//   return returnVal;
// }

function isUppercase(string) {
  let output = !/[a-z]/.test(string);
  console.log(output);
  return output;
}