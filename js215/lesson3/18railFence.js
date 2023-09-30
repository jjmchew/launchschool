/*
Start: 15:19;  Finish: 16:42 (w/ break);  Elapsed:  1 hr 11 minutes
Implement encoding and decoding for the rail fence cipher.

The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded.
It was already used by the ancient Greeks.

In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence,
then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

Copy Code
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
Then reads off:

Copy Code
WECRLTEERDSOEEFEAOCAIVDEN
To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

Copy Code
? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
The first row has seven spots that can be filled with "WECRLTE".

Copy Code
W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
Now the 2nd row takes "ERDSOEEFEAOC".

Copy Code
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
Leaving "AIVDEN" for the last row.

Copy Code
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
If you now read along the zig-zag shape you can read the original message.
*/

// ======================================

/*
input
- string of characters 'inputStr'
- encode = true : inputStr is decoded characters
- encode = false : inputStr is ENCODED characters

output
- encode = true : output is ENCODED
- encode = false : output is DECODED

rules
- assume cipher rail doesn't change - i.e., 3 rails only
- case insensitive - convert everything to uppercase
- remove all spaces
- ignore other characters (assume no special characters, e.g., newlines, tab, etc.)

data structure
- store 'y' pattern in an array [0, 1, 2, 1] - can be iterated through continuously
  - (x % 4) will tell us what index to use AND thus which ROW letters go into
- use nested array to store each set of rails - easy for encoding:
  [
    ['H', 'O'],
    ['E', 'L'],
    ['L'],
  ]

approach
- to encode:
  - take each letter and push it to the appropriate nested array (rail) based on letter index % 4
  - combine each rail in order and add it to a string (can use reduce)

- to decode:
  - create an output array to store letters
  - need to determine how many letters are in each rail to split up chars into rails
  - use idx % 4 to shift each letter from start of appropriate rail and push onto output array

notes

- need to identify which ROW (i.e., Y, 2nd coord) each character will be placed in
- pattern of rails
  X 0 1 2 3 4 5 6 7 8 9 10...
Y
0   1       5       9
1     2   4   6   8   _
2       3       7       _

- pattern of spots (coordinates):
 0      1       2     3       4     5       6     7     8       9       10
[0,0], [1,1], [2,2], [3,1], [4,0], [5,1], [6,2], [7,1], [8,0], [9,1], [10,2] ...
    [1,1] [1,1]  [1,-1] [1,-1]  [1,1] [1,1]   [1,-1] [1,-1] ..

- pattern:
  - x is always the index (char #)
  - y repeats every 4 indexes in this pattern 0, 1, 2, 1 ...

- figuring out the fence:
  - can construct the fence by doing encoded.length / 4

- # of char in each row based on encoded length
     length   idx   row 0  1  2
        1      0        1
        2      1        1  1
        3      2        1  1  1
        4      3        1  2  1
        5      4        2  2  1
        6      5        2  3  1
        7      6        2  3  2
        8      7        2  4  2
    - row 0 increases on every 4th index, starting at 0  > Math.ceil(length / 4)
    - row 1 increases on every even index (1, 3, 5, ...) > length / 2
    - row 2 increases on every 4th index, starting at 2  > Math.ceil((length - 2) / 4)
*/

console.log(railFence('hello', true) === 'HOELL');
console.log(railFence('hOeLl', false) === 'HELLO');
console.log(railFence('WE ARE DISCOVERED FLEE AT ONCE', true) === 'WECRLTEERDSOEEFEAOCAIVDEN');
console.log(railFence('WECRLTEERDSOEEFEAOCAIVDEN', false) === 'WEAREDISCOVEREDFLEEATONCE');

function railFence(inputStr, encode = true) {
  // solution assumes only 3 rails
  let yPosition = [0, 1, 2, 1];
  let cleanStr = inputStr.replace(/ /g, '').toUpperCase();
  let output;

  if (encode) {
    let rails = [[], [], []];

    cleanStr.split('').forEach((char, index) => {
      let railIdx = yPosition[index % 4];
      rails[railIdx].push(char);
    });

    output = rails.flat().join('');
    console.log(output);
  } else {
    // split inputStr into rails
    let numChars0 = Math.ceil(cleanStr.length / 4);
    let numChars1 = Math.floor(cleanStr.length / 2);
    let chars = cleanStr.split('');
    let rails = [
      [...chars.slice(0, numChars0)],
      [...chars.slice(numChars0, numChars0 + numChars1)],
      [...chars.slice(numChars0 + numChars1)],
    ];

    // decode rails
    output = [];
    for (let i = 0; i < cleanStr.length; i += 1) {
      let railIdx = yPosition[i % 4];
      let nextChar = rails[railIdx].shift();
      output.push(nextChar);
    }
    output = output.join('');
    console.log(output);
  }
  return output;
}
