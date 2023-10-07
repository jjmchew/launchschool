/*
https://launchschool.com/exercises/81d3afa6

In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

A chessboard can be represented by an 8 by 8 array.

So if you're told the white queen is at (2, 3) and the black queen at (5, 6), then you'd know you've got a set-up like so:
x
0 1 2 3 4 5 6 7
_ _ _ _ _ _ _ _ 0
_ _ _ _ _ _ _ _ 1
_ _ _ W _ _ _ _ 2
_ _ _ _ _ _ _ _ 3
_ _ _ _ _ _ _ _ 4
_ _ _ _ _ _ B _ 5
_ _ _ _ _ _ _ _ 6
_ _ _ _ _ _ _ _ 7 y

You'd also be able to answer whether the queens can attack each other. In this case, that answer would be yes, they can, because both pieces share a diagonal.

Implement function(s) to define positions for the white and black queen on an 8x8 board from:
coordinates given (e.g., 2, 3) and also a 'string' board.
Once you have queens on the board, return true or false to indicate if they can attack each other

*/

/*
elapsed:  43 mins



input
1) define coords for white and black queen via array of coordinates
2) read in a board string that indicates those positions with 'B' and 'W'

output
(from 'canAttack' function) : true / false : if queens can attack each other from their defined positions

rules
- position coords:  [y, x]
  - x counts from L to R, start at 0
  - y counts from top to bottom, start 0
- queens can attack IF
  - y is the same (vert)
  - x is the same (horiz)
  - diagonal is the same (abs difference between y coords is same as abs difference between x coords)

approach (readBoard)
- remove spaces from 'inputBoard'
- can split by '\n' to get y coord (array rowIdx)
- use 'indexOf('W')' and 'indexOf('B')' to get x positions of queens
  - scan each row until indexOf returns something other than -1, this will be x coord

approach (canAttack)
- given coords of white and black queen, check:
  - if y coord is the same  OR
  - if x coord is the same  OR
  - if 'onDiagonal' (helper function)


notes
- 4 possible diagonals:                            end - start
                                                    y     x
  - [-1, -1] to top L   e.g., [5, 6] to [2, 3]     2-5 = 3-6
  - [1, 1] to bottom R  e.g., [3, 2] to [7, 6]     7-3 = 6-2
  - [1, -1] to bottom L e.g., [1, 5] to [4, 2]     4-1 = -(2-5)
  - [-1, 1] to top R    e.g., [7, 5] to [6, 6]  -(6-7) = 6-5
- can do Math.abs(yw - yb) = Math.abs(xw - xb)
- when reading in board : need to remove spaces between underscores to use strIndex to determine position

*/

let queens = {
  white: [5, 6],
  black: [2, 3],
  placeWhite(coords) {
    this.white = coords;
  },
  placeBlack(coords) {
    this.black = coords;
  },
  placeBoth(coords) {
    this.white = coords.white;
    this.black = coords.black;
    console.log('W', this.white, 'B', this.black, this.canAttack());
    return this.canAttack();
  },
  readBoard(inputBoard) {
    let cleanBoard = inputBoard.replace(/ /g, '').split('\n');
    let findQueen = letter => {
      return cleanBoard.reduce((coords, row, rowIdx) => {
        if (row.includes(letter)) {
          return [ rowIdx, row.indexOf(letter) ];
        } else return coords;
      }, [0, 0]);
    }
    let B = findQueen('B');
    let W = findQueen('W');
    this.placeWhite(W);
    this.placeBlack(B);
    return {white: W, black: B, canAttack: this.canAttack()};
  },
  canAttack() {
    if (this.white[0] === this.black[0]) return true;
    else if (this.white[1] === this.black[1]) return true;
    else if (this.onDiagonal()) return true;
    else return false;
  },
  onDiagonal() {
    let xDiff = Math.abs(this.white[1] - this.black[1]);
    let yDiff = Math.abs(this.white[0] - this.black[0]);
    return xDiff === yDiff;
  },
};


// #region Dev test cases
// queens.placeWhite([7, 3]);
// console.log(queens);
// console.log(queens.canAttack());
// console.log(queens.readBoard(board1));
// console.log('W:', queens.white, 'B:', queens.black, queens.canAttack());
// #endregion


// #region given test cases
let board1 = '_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ W _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ B _\n_ _ _ _ _ _ _ _';
let out1 = {white: [2, 4], black: [6, 6]};  // false

let board2 = 'B _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ W _ _ _ _ _ _';
let out2 = {white: [7, 1], black: [0, 0]};  // false

let board3 = '_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ B _ _ _\n_ _ _ W _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _';
let out3 = {white: [4, 3], black: [3, 4]}; // true

let board4 = '_ B _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ W _ _ _ _ _ _';
let out4 = {white: [7, 1], black: [0, 1]};  // true

console.log(queens.readBoard(board1));
console.log(queens.readBoard(board2));
console.log(queens.readBoard(board3));
console.log(queens.readBoard(board4));

let queens1 = {white: [2, 3], black: [4, 7]};  // false
let queens2 = {white: [2, 4], black: [2, 7]};  // true
let queens3 = {white: [5, 4], black: [2, 4]};  // true
let queens4 = {white: [1, 1], black: [6, 6]};  // true
let queens5 = {white: [0, 6], black: [1, 7]};  // true
let queens6 = {white: [4, 1], black: [6, 3]};  // true
let queens7 = {white: [6, 1], black: [1, 6]};  // true

console.log(queens.placeBoth(queens1) === false);
console.log(queens.placeBoth(queens2) === true);
console.log(queens.placeBoth(queens3) === true);
console.log(queens.placeBoth(queens4) === true);
console.log(queens.placeBoth(queens5) === true);
console.log(queens.placeBoth(queens6) === true);
console.log(queens.placeBoth(queens7) === true);
// #endregion




