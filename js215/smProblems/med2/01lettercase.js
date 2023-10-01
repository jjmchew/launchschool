/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

*/

/*
elapsed:  10 mins



input
- string : mixed upper/lower case other chars

output
- object:  indicates percentage of lower, upper, neither case
  - numbers are 2 decimals places, add up to 100

rules
- assume string always contains at least one character
- other includes spaces - assume any other char except upper/lower

data
- work with strings; object as output

approach
- inputStr.length for total count
- can use regex to count # of each type of char
- assign variables to track counts
- define output object when doing final calculations

example
letterPercentages('abCdef 123');
10 letters total
lower:  5
upper: 1
other: 4
*/

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(inputStr) {
  let lowercase = inputStr.match(/[a-z]/g)?.length || 0;
  let uppercase = inputStr.match(/[A-Z]/g)?.length || 0;
  let neither = inputStr.match(/[^a-z]/ig)?.length || 0;
  
  let calcOutput = (num, denom) => (num / denom * 100).toFixed(2);
  let totalLength = inputStr.length;

  return { 
    lowercase: calcOutput(lowercase, totalLength),
    uppercase: calcOutput(uppercase, totalLength),
    neither: calcOutput(neither, totalLength)
  }
}