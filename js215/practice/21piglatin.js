/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

/*

input
- string of words (mixed upper/lower case)

output
- 'encoded' string

rules
- move first letter (maintain case) to end of word, add 'ay'
- non-alpha characters / spaces remain

approach
- use regex replace with replacer function

*/

// console.log(pigIt('word. don\'t word'));
console.log(pigIt('Pig latin is cool') === "igPay atinlay siay oolcay");
console.log(pigIt('Hello world !') === "elloHay orldway !");

function pigIt(str) {
  let replacer = match => {
    return match.slice(1) + match[0] + 'ay';
  };
  let output = str.replace(/[a-z']+/ig, replacer);
  console.log(output);
  return output;
}