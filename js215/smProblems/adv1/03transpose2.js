/*
In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

Examples:
transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

*/

/*
elapsed:  11 mins



input
- array with at least 1 nested array with at least 1 element

output
- outputArray: transposed inputArray

rules
- input array has at least 1 nested array with at least 1 element

approach
- create 'outputArray' with as many nested array elements as there elements in the nested array in inputArray
    - e.g., [[1, 2, 3, 4]]  => inner array has 4 elements, 'outputArray' need 4 nested arrays
- iterate through each row of inputArray (inCol = outRow)
    - assign each element (push) to subsequent nested arrays of outputArray
- return outputArray

*/

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

function transpose(inputArray) {
  let outputArray = Array.from({length: inputArray[0].length}, (_) => []);
  inputArray.forEach(row => {
    row.forEach((element, inCol) => {
      outputArray[inCol].push(element);
    });
  });
  console.log(outputArray);
  return outputArray;
}