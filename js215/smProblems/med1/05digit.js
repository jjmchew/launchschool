/*

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Example:

Copy Code
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

*/

/*
elapsed:  12 mins


input
- string : possibly containing 'number words'

output
- string : all 'number words' converted to numeric digits

rules
- all other non-number words / characters remain unchanged (including spaces)
- assume number words can be upper, lower, or mixed case

data
- store all number words in an array - index corresponds to numeric digit

approach
- use 'replace' with 'replacing' function - can scan case-insensitively


*/

console.log(wordToDigit('ddfour') === 'ddfour');
console.log(wordToDigit('Four') === '4');
console.log(wordToDigit('oNe  FouR....') === '1  4....');
console.log(wordToDigit('five four') === '5 4');
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");

// refactored regex
function wordToDigit(inputStr) {
  const IS_NUMBER_WORD = /\b(one|two|three|four|five|six|seven|eight|nine|zero)\b/ig;
  const DIGITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const digitReplace = word => DIGITS.indexOf(word.toLowerCase()).toString();

  return inputStr.replace(IS_NUMBER_WORD, word => digitReplace(word));
}

// Version1
// function wordToDigit(inputStr) {
//   let regex = new RegExp('(\\bone\\b|\\btwo\\b|\\bthree\\b|\\bfour\\b|\\bfive\\b|\\bsix\\b|\\bseven\\b|\\beight\\b|\\bnine\\b|\\bzero\\b)', 'ig');

//   let digitReplace = word => {
//     let DIGITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     return DIGITS.indexOf(word.toLowerCase()).toString();
//   }

//   let outputStr = inputStr.replace(regex, word => digitReplace(word));
//   console.log(outputStr);
//   return outputStr;
// }
