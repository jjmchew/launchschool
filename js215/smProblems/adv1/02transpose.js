/*

A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6
is represented by the following array of arrays:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

1  4  3
5  7  9
8  2  6
Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

*/

/*
elapsed:  18 mins


input
- 3 x 3 matrix:  [ [00, 01, 02], [10, 11, 12], [20, 21, 22] ]

output
- 3 x 3 matrix transposed: [ [00, 10, 20], [01, 11, 21], [02, 12, 22] ]

rules
- must produce a new matrix (non-mutating - input array remains unchanged)
- assume only 3 x 3 matrixes are input

data
- continue to use arrays

approach
- create a new array 'output' (3 nested arrays of 3 elements)
- iterate from 0..2 (index2 of inputArray)
  - iterate from 0..2 (index1 of inputArray)
    - assign elements to various elements/arrays according to pattern
- return 'output'

notes
- input:
        [ [row1], [row2], [row3] ]
 index1      0       1       2
 index2    0 1 2   0 1 2   0 1 2
- could just define which elements go where in new matrix

- output:
        [ [row1], [row2], [row3] ]
 row1: index1: 0..2; index2: 0 of each input row
 row2: index1: 0..2; index2: 1 of each input row
 row3: index1: 0..2; index2: 2 of each input row

- test:
        output            input
  - index2    index1  
      0         0         0 0
                1         1 0
                2         2 0
      1         0         0 1
                1         1 1
                2
 */

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

function transpose(inputMatrix) {
  let outputMatrix = [ [ , , ], [ , , ], [ , , ] ];
  for (let index2 = 0; index2 <= 2; index2 += 1) {
    for (let index1 = 0; index1 <= 2; index1 += 1) {
      outputMatrix[index2][index1] = inputMatrix[index1][index2];
    }
  }
  return outputMatrix;
}