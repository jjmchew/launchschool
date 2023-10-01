/*

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Examples:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

*/

/*

elapsed:  32 mins



input
- integer number 'inputNum'

output
- integer number : the next featured number larger than 'inputNum'

rules
- featured numbers are:
    - odd
    - multiple of 7
    - all digits occur only once


approach
- helper method:  'isFeatured' - check if a number is 'featured'
- if 'inputNum' is > max featuredNum, then return error message
- starting with inputNum, increment by 1 to find next featured number
  - at each number, check to see if it is a featuredNum
  - if so return that number


notes
- for unique digits: can sort and check if each digit != the digit after
- finding featured numbers: can increment by 7 (from a multiple of 7) and check if 'featured'
*/
'use strict';

console.log(featured(1) === 7);
console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) ===  1023456987);
console.log(featured(9876543186) === 9876543201);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543201) === "There is no possible number that fulfills those requirements.");


// optimized
function featured(inputNum) {
  const MAX_FEATURED_NUM = 9876543201;
  if (inputNum >= MAX_FEATURED_NUM) return 'There is no possible number that fulfills those requirements.';
  
  let isOddMultipleOf7 = num => num % 2 !== 0 && num % 7 === 0;
  let hasUniqueDigits = num => {
    return String(num).split('').sort().filter((digit, idx, arr) => digit === arr[idx + 1])
                      .length === 0;
  };
  let nextNum = (start, increment, checkFct) => {
    let count = start;
    do {
      count += increment;
    } while (!checkFct(count));
    return count;
  };

  let count = nextNum(inputNum, 1, isOddMultipleOf7);
  if (hasUniqueDigits(count)) return count;
  else return nextNum(count, 14, hasUniqueDigits);
}


// Version1
// function featured(inputNum) {
//   const MAX_FEATURED_NUM = 9876543201;
//   if (inputNum >= MAX_FEATURED_NUM) return 'There is no possible number that fulfills those requirements.';

//   let isFeatured = num => {
//     if (num % 2 === 0) return false;
//     if (num % 7 !== 0) return false;
//     let dupDigits = String(num).split('').sort().filter((digit, idx, arr) => digit === arr[idx + 1]);
//     if (dupDigits.length !== 0) return false;
//     return true;
//   };
//   let count = inputNum;
//   while (!isFeatured(count)) {
//     count += 1;
//     if (isFeatured(count)) return count;
//   }
// }