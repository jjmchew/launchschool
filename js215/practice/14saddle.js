/*
https://launchschool.com/exercises/4dbff7bb

Write a program that detects saddle points in a matrix.

So say you have a matrix like so:

    0  1  2
  |---------
0 | 9  8  7
1 | 5  3  2     <--- saddle point at (1,0)
2 | 6  6  7
It has a saddle point at (1, 0).

It's called a "saddle point" because it is greater than or equal to every element in its row and the less than or equal to every element in its column.

A matrix may have zero or more saddle points.

Your code should be able to provide the (possibly empty) list of all the saddle points for any given matrix.

Note that you may find other definitions of matrix saddle points online, but the tests for this exercise follow the above unambiguous definition.

Matricies should be input as strings:
e.g., "1 2\n10 20" corresponds to [ [1, 2], [10, 20] ]
e.g., "1 2 3\n4 5 6\n7 8 9\n8 7 6" corresponds to:
123
456
789
876

Matricies should have a method:
  - 'rows' which returns an array of rows (each an array)
  - 'columns' which returns an array of columns (each column is an array)
  - 'saddlePoint' which returns an array of arrays indicating coordinates for saddle points in the given matrix
    - could be an empty array
*/

/*
elapsed:  52 mins (with debugging - watch Strings vs Numbers!!!)



input
- a string representation of a matrix:
  - assume only integer numbers > 0, separated by spaces to represent a single row
  - rows separated by '\n'
  - assume all inputs are 'correct' (i.e., same number of cols in each row)

output
- of 'rows': an array of arrays representing each row
- of 'columns' : an array of arrays representing each column
- of 'saddlePoint': an array of arrays reprsenting [row, col] coordinates (zero-based) for saddlePoints
    - may be empty if no saddlePoints exist

rules
- saddlePoint : the element at the indicated coordinates is:
    - greater than or equal to every element in its ROW
    - less than or equal to every element in its COLUMN

approach (makeMatrix)
- split on '\n' into rows
- split on ' ' into array elements
- write to `this.matrix`

approach (rows)
- just return the matrix as stored (array of arrays)

approach (columns)
- create empty columns array with as many subarrays as there are elements in the first (input) row
- iterate across each row, and 'colsIdx' from 0 to inputArray.length - 1
    - use 'colsIdx' as index for rows in new output array
    - push the element at the 'colsIdx' to a corresponding row

approach (saddlePoint)
// - create an empty array 'saddlePoints'
// - iterate across each row of matrix (w/ index)
//   - iterate across each col of matrix (w/ index)
//     - if element at [rowIdx, colIdx] is a SaddlePoint
//         - add it to array 'saddlePoints'

- use map to turn matrix into a (flat) set of coordinates (to pass into isSaddlePoint)
- then use filter to select only coordinates that are saddlePoints



approach (isSaddlePoint)
- takes argument 'coords' [rowIdx, colIdx]
- checks if every element in rows[rowIdx] is less than or equal to element at [rowIdx, colIdx]
- checks if every element in cols[colIdx] is greater than or equal to element at [rowIdx, colIdx]
- if both conditions are true, then returns true


test
9 7  >  9 8
8 6  >  7 6
- like a transposed matrix - the colIdx of original becomes rowIdx of new
  - can push subsequent elements onto (new) rowIdx

notes
- can use 'every' on row and col to confirm if it is a saddlePoint
- helper function 'isSaddlePoint'
*/
'use strict';

let matrix = {
  new(inputString) {
    this.matrix = this.makeMatrix(inputString);
    return this.matrix;
  },
  makeMatrix(inputString) {
    let newArray = inputString.split('\n').map(row => row.split(' '));
    return newArray.map(row => {
      return row.map(element =>  Number(element));
    })
  },
  rows() {
    return this.matrix;
  },
  columns() {
    let outputArray = Array.from({length: this.matrix[0].length}, (_) => []);
    this.matrix.slice().forEach(row => {
      row.forEach((element, colIdx) => {
        outputArray[colIdx].push(element);
      })
    })
    return outputArray;
  },
  saddlePoint() {
    let coords = this.matrix.map((row, rowIdx) => {
      return row.map((_, colIdx) => [rowIdx, colIdx]);
    });
    return coords.flat().filter(coord => this.isSaddlePoint(coord));
  },
  isSaddlePoint(coords) {
    let [ rowIdx, colIdx ] = coords;
    let testElement = this.matrix[rowIdx][colIdx];
    let rowsPass = this.rows()[rowIdx].every(num => num <= testElement);
    let colsPass = this.columns()[colIdx].every(num => num >= testElement);
    return  rowsPass && colsPass;
  }
};

console.log(matrix.new('1 2\n10 20')); // [ [1, 2], [10, 20] ]
console.log(matrix.new('9 7\n8 6')); // [ [9, 7], [8, 6] ]
console.log('==========');
console.log(matrix.new('9 7\n8 6')) // [ [9, 8], [7, 6] ]
console.log(matrix.columns());
console.log('==========');
console.log(matrix.new('1 2\n10 20')); // [ [1, 2], [10, 20] ]
console.log(matrix.columns()[1]); // [2, 20]
console.log('==========');
console.log(matrix.new('9 8 7\n19 18 17')); // [ [9, 8, 7], [19, 18, 17] ]
console.log(matrix.columns()[1]); // [8, 18]
console.log(matrix.rows()[1]); // [19, 18, 17]

console.log('========== saddlePoint');
console.log(matrix.new('9 8 7\n5 3 2\n6 6 7')); // [ [9, 8, 7], [5, 3, 2], [6, 6, 7] ]
console.log(matrix.saddlePoint()); // [[1, 0]]

console.log('========== saddlePoint');
console.log(matrix.new('2 1\n1 2')); // [ [2, 1], [1, 2] ]
console.log(matrix.saddlePoint());  // []

console.log('========== saddlePoint');
console.log(matrix.new('1 2\n3 4')); // [ [1, 2], [3, 4] ]
console.log(matrix.saddlePoint());  // [ [0, 1] ]

console.log('========== saddlePoint');
console.log(matrix.new('18 3 39 19 91\n38 10 8 77 320\n3 4 8 6 7')); // [ [18, etc.
console.log(matrix.saddlePoint());  // [ [2, 2] ]

console.log('========== saddlePoint');
console.log(matrix.new('4 5 4\n3 5 5\n1 5 4')); // [ [4, etc.
console.log(matrix.saddlePoint());  // [[0, 1], [1, 1], [2, 1]]