/*
https://launchschool.com/lessons/28467827/assignments/cec18cce

Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

Examples
flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']

*/

/*
elapsed:  54 mins;  **TOO SLOW** - need to think through test cases faster!



input
- 2 dimensional array : 'inputArr'

output
- 1-D array : numbers and equivalent numbers strings are removed, keep the 'first' element (in order)

rules
- order matters : use lower rowIdx for inputArr and then lowest element index (colIdx) for subarrays
- empty array returns empty
- any number of elements in subarrays

questions
- how do we treat order?  lowest array index comes first
- only 2-D arrays?  what if less / more?  return string 'invalid input'
- not an array input?   return string 'invalid input'
** - sparse arrays?  keep empty elements in order - okay for them to be 'undefined'? no - remain empty
**  - need to differentiate between empty & undefined?  assume all undefined are empty?
- other element types : keep them in order
  - 0, -0 : equivalent? yes
- strings of mixed alpha / numbers - keep as strings?  yes - no number equivalent
- elements: objects?  nested objects?  deep copy or shallow copy? shallow is sufficient
  - nested sub-arrays in subarrays?  flatten?  no - keep them as they are (shallow copy)
- mutate original?  no

** QUESTIONS I FORGOT **
- ask about # of argument inputs!! (solution worked anyway, but should have asked)
- ask about NaN!!
- didn't ask about Infinity, -Infinity, negatives (but should be okay)
- didn't ask about mutation
- didn't ask about non-element properties
- 

notes
- canNOT use 'flat()' to flatten array - won't keep empty elements in place
- can then search through array and check for elements which explicitly coerce into equivalent numbers
- need to ensure we address sparse arrays - those elements may not remain as empty
- create new array based on length - to keep empty elements in place
  - assign elements specifically using indexes to keep empty elements
- can do a while loop using 'indexOf' until 'indexOf' is -1 for each element

approach
- define a new 'output' array using Array.from
  - get length of subarray1 + length of subarray2 - use this for new array (will create empty elements)
- Assign each element of new array (via index)
  - iterate through 1st subarray (use 'for' loop to get empty elements)
  - iterate through 2nd subarray - index will be arr1.length + idx2
- iterate through 'output' to remove duplicates
  - for each element, check if it's a number
  - if so, check if other elements which can be coerced to a number are equal (helper function)
    - if so, get index of that number
    - splice that element out
    - check array again (for multiple duplicates)
- return 'output'
*/

function flattenAndUnique(inputArray) {
  if (!Array.isArray(inputArray)) return 'invalid input';
  else if (inputArray.length === 0) return [];
  else if (inputArray.length !== 2) return 'invalid input';
  if (!Array.isArray(inputArray[0]) || !Array.isArray(inputArray[1])) return 'invalid input';

  let checkDup = (testNum, i) => {
    let testArray = output.map((element, idx) => {
      if (idx !== i) return Number(element);
      else return NaN;
    });
    return testArray.indexOf(testNum);
  };

  let outputLength = inputArray[0].length + inputArray[1].length;
  let output = Array.from({length: outputLength});
  for (let i = 0; i < inputArray[0].length; i += 1) {
    if (inputArray[0][i] !== undefined) output[i] = inputArray[0][i];
  };

  for (let i = 0; i < inputArray[1].length; i += 1) {
    if (inputArray[1][i] !== undefined) output[inputArray[0].length + i] = inputArray[1][i];
  }

  for (let i = 0; i < output.length; i += 1) {
    let currentTest = Number(output[i]);
    if (!Number.isNaN(currentTest) && typeof currentTest === 'number' ) {
      let indexToRemove;
      do {
        indexToRemove = checkDup(currentTest, i);
        if (indexToRemove !== -1) output.splice(indexToRemove, 1);
      } while (indexToRemove !== -1);
    }
  }
  console.log(output);
}

console.log(flattenAndUnique()); // 'invalid input'
console.log(flattenAndUnique([[1, 2, 3], ['a', 'b'], [11, 12]])); // 'invalid input'
console.log(flattenAndUnique('hello')); // 'invalid input'
console.log(flattenAndUnique([['a', 'b']])); // 'invalid input'
console.log(flattenAndUnique(['a', 'b'])); // 'invalid input'
console.log(flattenAndUnique([])); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
flattenAndUnique([[3, 2, 3], ['3', 4, 3, 'a']]); // [3, 2, 4, 'a']
flattenAndUnique([['3', 2, 3], ['3', 4, 3, 'a']]); // ['3', 2, 4, 'a']
flattenAndUnique([[1, 2, 0], ['3', 4, -0, 'a']]); // [1, 2, 0, '3', 4, 'a']
flattenAndUnique([[4, '2b', 0], ['3', 4, 'a3']]); // [4, '2b', 0, '3', 'a3']
flattenAndUnique([[], [{a: 1}, [2, 3]]]); // [ {a: 1}, [2, 3] ]

let arr1 = Array.from({length: 3});
let arr2 = [1, 2, 3];
arr2.length = 5;
flattenAndUnique([arr1, arr2]); // [ emp x 3, 1, 2, 3, empty x 2];

