/*
https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.
Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

/*
input
- string with ()[]{} and other characters

output
- true - if all braces are matched
- false if not

rules
- each bracket must be matched with the correct type and closed before another bracket type is opened

notes
- can use 'count' to keep track of opening / closing again
- need another array, to keep track of brace type

approach
- initialize 'count' to 0
- initialize 'type' to empty array
- iterate through string 1 character at a time
  - if char is '({[' then count += 1 AND push corresponding closing bracket to 'type'
  - if char is ')}]' then count -= 1 AND pop closing bracket to check type
    - if closing bracket type is wrong return FALSE
  - if count is ever -ve return FALSE
- return TRUE if string parses correctly

*/


// Version1
function validBraces(braces) {
  let count = 0;
  let type = [];
  let getClose = bracket => {
    if (bracket === '(') return ')';
    else if (bracket === '{') return '}';
    else if (bracket === '[') return ']';
  };
  for (let i = 0; i < braces.length; i += 1) {
    if ('({['.includes(braces[i])) {
      count += 1;
      type.push(getClose(braces[i]));
    } else if (')}]'.includes(braces[i])) {
      count -= 1;
      if (braces[i] !== type.pop()) return false;
    }
    if (count < 0) return false;
  }
  if (count !== 0) return false;
  return true;
}

// console.log(validBraces("(){}[]") === true);
// console.log(validBraces("([{}])") === true);
// console.log(validBraces("(}") === false);
// console.log(validBraces("[(])") === false);
// console.log(validBraces("[({})](]") === false);
console.log(validBraces("[(did {hellow} piece of ) pie ]") === true);