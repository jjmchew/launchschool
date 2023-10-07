/*
https://launchschool.com/exercises/e985e209

Minesweeper is a popular game where the user has to find the mines using numeric hints that indicate how many mines are directly adjacent (horizontally, vertically, diagonally) to a square.

In this exercise you have to create some code that counts the number of mines adjacent to a square and transforms boards like this (where * indicates a mine):

+-----+
| * * |
|  *  |
|  *  |
|     |
+-----+
into this:

+-----+
|1*3*1|
|13*31|
| 2*2 |
| 111 |
+-----+
*/

/*
elapsed:  39 mins !!


input
- array 'inp' : where each element of the array is a row representing the board
                - '*' represents mines

output
- array 'out' : the same board as 'inp' with numbers in place of spaces indicating the number of adjacent mines
                - '0' is not indicated, only the numbers 1 and up

rules
- board can be any width, but will always have same borders
    - i.e.,'+--------+' top/bottom and '|' for vertical walls, no leading / trailing spaces
- don't mutate input array, return a new array
- assume no need to do input validation (i.e., only valid chars / boards submitted in correct format)

approach
- define output array 'out' as copy of first element of 'inp'
- iterate through each element of 'inp' from indexes 1 to length-2 (first and last are borders)
  - replace all spaces in each row by calling `replace` and check '/ /g', pass in replacer function
  - push this updated row to 'out'
- push the last element of 'inp' to 'out' (final border)
- return 'out'

replacer function approach
- will be returned by 'makeReplacer', can define a parameter 'rowIdx' and pass in value of rowIdx
- actual replacer will receive 'match' (unneeded) and 'offset' (strIdx) from `replace`, can access 'rowIdx'
  - scan required rows of 'inp' to count # of '*' in space to scan
    - counting '*': inp[rowIdx].slice(strIdx-1, strIdx+2).match(/\* /).length
                  + inp[rowIdx-1].slice(strIdx-1, strIdx+2).match(/\* /).length
                  + inp[rowIdx+1].slice(strIdx-1, strIdx+2).match(/\* /).length
  - use 'count' to replace space


notes
01 (string index)
*1
11
- for a space at a given index, need to check strIdx-1, strIdx, strIdx+1 in rowIdx-1, rowIdx, rowIdx+1
  - need current rowIdx, strIdx
  - rowIdx will come from array index
  - strIdx can come from replace match 'offset' in replace function
- count the number of "*" in those spaces

01234567
  X
*/


// #region own test cases
let in1 = [
  '+---+',
  '|*  |',
  '+---+',
];
let ou1 = [
  '+---+',
  '|*1 |',
  '+---+',
];
let in2 = [
  '+---+',
  '|*  |',
  '|  *|',
  '+---+',
];
let ou2 = [
  '+---+',
  '|*21|',
  '|12*|',
  '+---+',
]
console.log(transform(in1).toString() === ou1.toString());
console.log(transform(in2).toString() === ou2.toString());
// #endregion
// #region provided test cases
let inp3 = ['+-----+', '| * * |', '+-----+'];
let out3 = ['+-----+', '|1*2*1|', '+-----+'];

let inp1 = ['+------+', '| *  * |', '|  *   |', '|    * |', '|   * *|', '| *  * |', '|      |', '+------+'];
let out1 = ['+------+', '|1*22*1|', '|12*322|', '| 123*2|', '|112*4*|', '|1*22*2|', '|111111|', '+------+'];

let inp2 = ['+-----+', '| * * |', '|     |', '|   * |', '|  * *|', '| * * |', '+-----+'];
let out2 = ['+-----+', '|1*2*1|', '|11322|', '| 12*2|', '|12*4*|', '|1*3*2|', '+-----+'];

let inp4 = ['+-+', '|*|', '| |', '|*|', '| |', '| |', '+-+'];
let out4 = ['+-+', '|*|', '|2|', '|*|', '|1|', '| |', '+-+'];

let inp5 = ['+-+', '|*|', '+-+'];
let out5 = ['+-+', '|*|', '+-+'];

let inp6 = ['+--+', '|**|', '|**|', '+--+'];
let out6 = ['+--+', '|**|', '|**|', '+--+'];

let inp7 = ['+---+', '|***|', '|* *|', '|***|', '+---+'];
let out7 = ['+---+', '|***|', '|*8*|', '|***|', '+---+'];

let inp8 = ['+-----+', '|     |', '|   * |', '|     |', '|     |', '| *   |', '+-----+'];
let out8 = ['+-----+', '|  111|', '|  1*1|', '|  111|', '|111  |', '|1*1  |', '+-----+'];

console.log(transform(inp1).toString() === out1.toString());
console.log(transform(inp2).toString() === out2.toString());
console.log(transform(inp3).toString() === out3.toString());
console.log(transform(inp4).toString() === out4.toString());
console.log(transform(inp5).toString() === out5.toString());
console.log(transform(inp6).toString() === out6.toString());
console.log(transform(inp7).toString() === out7.toString());
console.log(transform(inp8).toString() === out8.toString());
// #endregion



function transform(inp) {
  function makeReplacer(rowIdx) {
    return function replacer(_, strIdx) {
      let count = (inp[rowIdx-1].slice(strIdx - 1, strIdx + 2).match(/\*/g)?.length || 0) +
                  (inp[rowIdx].slice(strIdx - 1, strIdx + 2).match(/\*/g)?.length || 0) +
                  (inp[rowIdx+1].slice(strIdx - 1, strIdx + 2).match(/\*/g)?.length || 0);
      return count === 0 ? ' ' : String(count);
    }
  }

  let out = inp.map((row, rowIdx) => {
    return row.replace(/ /g, makeReplacer(rowIdx));
  });
  console.log(out);
  return out;
}