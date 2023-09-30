/*
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

========================

input
- string: ordered digits in 'shorthand'

output
- complete array of numbers based on 'shorthand' - always increasing

rules
- shorthand:
    - `,` lists separate, discrete numbers
        - if the number appears to be less than the previous number, then we need to add 10 to the current digit
    - `-` include all digits between the first and the second (follow the same rules as `,` to create the first number, and all numbers in-between to include the last digit - incrementing appropriately, as required by adding 10)
    - `:` same as `-`
    - `..` same as `-`

approach
- split on `,` and any number of spaces to create an array of 'sections'
- create an empty array to collect required numbers ('numbers')

- iterate through sections starting from index 0
  - check if section contains '-:..' (helper function - hasSeparator)
    - if NOT, determine number to add (helper function - addNumber)
    - if SO, split on `-` or `:` or `..`
        - 


*/

// #region
// OLD approach:
//         - starting with first section (section '0')
//           - determine number to add (helper function - addNumber)
//               - check the last number added to numbers
//               - if number given is greater just add it
//               - if not, add `10` and check again until valid, add this number
//           - iterate this for as remaining sections 
//               - increment number added by 1 to get a new number
//               - add it to 'numbers'
//               - check next section
//                   - if last digit(s) of next section match recently added number then go to next section (helper fct - checkDigit)
// #endregion

console.log(expand('1, 3, 7, 2, 4, 1') === '1,3,7,12,14,21');
// ['1', '3', '7', '2', '4', '1']
// [1]
// [1, 3]
// [1, 3, 7]
// [1, 3, 7, 12]
// ... [1, 3, 7, 12, 14, 21]
console.log(expand('1-3, 1-2') === '1,2,3,11,12');
// ['1-3', '1-2']
//    ['1','3']
//     numbers: [1]
//     numbers: [1, 2]
//     numbers: [1, 2, 3]
console.log(expand('1:5:2') === '1,2,3,4,5,6,7,8,9,10,11,12');
// ['1:5:2']
//    ['1', '5', '2']
//    start '1' (index 0), target '5' (index 1) : addNumber('1') and incrementStrDigit / addNumber until includesDigit(target)
//      - then set target to index 2 ('2'), incrementStrDigit / addNumber until includesDigit(target)
//    toAdd    next    target
//    '1'       '2'     '5'
//    '2'       '3'     '5'
//    '3'       '4'     '5'
//    '4'       '5'     '5'
//    '5'       '6'     '5'  set new target
//    '6'       '7'     '2'
//    '7'       '8'     '2'
console.log(expand('104-2') === '104,105,106,107,108,109,110,111,112');
// "104-2" --> 104, 105, ... 112

'use strict';

function expand(shorthand) {
  let hasSeparator = section => {
    return new RegExp(/[-:(\.\.)]/).test(section);
  };
  let addNumber = strDigit => {
    let newNum = parseInt(strDigit, 10);
    if (numbers.length === 0) numbers.push(newNum);
    else {
      let lastNum = numbers[numbers.length - 1];
      while (newNum < lastNum) {
        newNum += 10;
      }
      numbers.push(newNum);
    }
  };
  let includesDigit = strDigit => {
    let lastNum = numbers[numbers.length - 1]?.toString() || 0;
    return lastNum[lastNum.length - 1] === strDigit;
  };
  let incrementStrDigit = strDigit => {
    let num = parseInt(strDigit, 10);
    num += 1;
    return num.toString();
  };

  let sections = shorthand.split(/, */g);
  console.log(sections);

  let numbers = [];
  sections.forEach(section => {
    if (!hasSeparator(section)) {
      addNumber(section);
    } else {
      let subSections = section.split(/[-:(\.\.)]/);
      let index = 0;
      let toAdd = subSections[index];
      
      for (index = 1; index < subSections.length; index += 1) {
        let target = subSections[index];
        while(!includesDigit(target)) {
          addNumber(toAdd);
          toAdd = incrementStrDigit(toAdd);
        }
      }
    }
  });

  console.log(numbers);
  return numbers.toString();
}