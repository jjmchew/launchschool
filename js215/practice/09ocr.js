/*
Write a program that, given a 3 x 4 grid of pipes, underscores, and spaces, can determine which number is represented, or whether it is garbled.

Step One
To begin with, convert a simple binary font to a string containing 0 or 1. The binary font uses pipes and underscores, four rows high and three columns wide.


 _   #
| |  # zero.
|_|  #
     # the fourth row is always blank
Is converted to "0"


   #
|  # one.
|  #
   # (blank fourth row)
Is converted to "1"

If the input is the correct size, but not recognizable, your program should return '?'. If the input is the incorrect size, your program should return an error.

Step Two
Update your program to recognize multi-character binary strings, replacing garbled numbers with ?

Step Three
Update your program to recognize all numbers 0 through 9, both individually and as part of a larger string.


 _
 _|
|_

Is converted to "2"


  _  _     _  _  _  _  _  _  #
| _| _||_||_ |_   ||_||_|| | # decimal numbers.
||_  _|  | _||_|  ||_| _||_| #
                             # fourth line is always blank
Is converted to "1234567890"

Step Four
Update your program to handle multiple numbers, one per line. When converting several lines, join the lines with commas.


    _  _
  | _| _|
  ||_  _|

    _  _
|_||_ |_
  | _||_|

 _  _  _
  ||_||_|
  ||_| _|

Is converted to "123,456,789"
*/

/*
elapsed:  1:10 (hh:mm)


input
- multiline string : characters should only include `|` `_`

output
- ? : if multiline string cannot be converted to a recognizable number
- number:  a string of digits converted from multiline string

rules
- multiline strings should always have an 'empty' first and last line
  - note:  chars will be on line 1
- numbers will be represented on the middle 2 lines
- all digits (incl. 1 and 7) will be 3 spaces width
  - spaces are necessary to ensure 7 is not read as 0 if next to 1
  - spaces are also necessary to parse multiple consecutive numbers
- assume numbers will not have unnecessary leading spaces between them

approach
- could split all multiline strings up by '\n' - then have array of lines
- initial checks:
- must have 4 lines or return '?'
- each row must have same number of chars
- number of chars in each row must be divisible by 3

- split up multiple characters into single characters that can be compared with digit patterns (i.e., 3 spaces wide, 4 lines)
  - create an empty array to collect chars : 'chars'
  - could go through each line creating a character:
    - define an empty array with 4 empty elements : 'newChar'
    - shift 3 chars from each line (same index) to each line of newChar
    - join each line with '\n'
    - push newChar to chars

- define an empty output string 'output'
- iterate through chars
  - compare each char to DIGITS (matchDigit)
  - concat each output char to 'output'

- if any char in output is '?' return '?'
- if all numbers, return output converted to Number
*/

/*
xxx   xxx
       _   _ 
  |    _|  _|
  |   |_   _|
             
1 : '   \n  |\n  |\n   \n'
2 : ' _ \n _|\n|_ \n   \n'
3 : ' _ \n _|\n _|\n   \n'
4 : '   \n|_|\n  |\n   \n'
5 : ' _ \n|_ \n _|\n   \n'
6 : ' _ \n|_ \n|_|\n   \n'
7 : ' _ \n  |\n  |\n   \n'
8 : ' _ \n|_|\n|_|\n   \n'
9 : ' _ \n|_|\n _|\n   \n'
0 : ' _ \n| |\n|_|\n   \n'
*/

console.log(ocr('    \n  |\n  |\n   \n') === '?');
console.log(ocr('   \n  |\n  |\n   \n') === '1');
console.log(ocr(' _ \n| |\n|_|\n   \n') === '0');
console.log(ocr(' _ \n| |\n|_|\n  ') === '?');
console.log(ocr(' _    \n| |  |\n|_|  |\n      \n'));
console.log(ocr(' _    \n| |  |\n|_|  |\n      \n'));

function ocr(inputStr) {
  let DIGITS = {
    '0' : ' _ \n| |\n|_|\n   \n',
    '1' : '   \n  |\n  |\n   \n',
    '2' : ' _ \n _|\n|_ \n   \n',
    '3' : ' _ \n _|\n _|\n   \n',
    '4' : '   \n|_|\n  |\n   \n',
    '5' : ' _ \n|_ \n _|\n   \n',
    '6' : ' _ \n|_ \n|_|\n   \n',
    '7' : ' _ \n  |\n  |\n   \n',
    '8' : ' _ \n|_|\n|_|\n   \n',
    '9' : ' _ \n|_|\n _|\n   \n',
  };

  let matchDigit = inputStr => {
    let digit = Object.keys(DIGITS).reduce((digit, key) => {
      if (DIGITS[key] === inputStr) {
        return digit = key;
      } else return digit;
    }, '?');
    return digit;
  };

  let isValidLineLength = lines => {
    lines.pop();
    return lines.every(line => line.length === lines[0].length && line.length % 3 === 0);
  };
  let lines = inputStr.split('\n').map(line => line.split(''));
  if (lines.length !== 5) return '?';
  if (!isValidLineLength(lines)) return '?';

  // parse chars into separate lines
  let chars = [];
  while (lines[0].length > 0) {
    let newChar = Array.from({length: 5}, (_) => []);
    lines.forEach((line, idx) => {
      newChar[idx].push(line.splice(0, 3).join(''));
    });
    chars.push(newChar);
  }
  chars = chars.map(char => char.map(line => line.join('\n')).join('\n'));

  // convert chars into digits
  let digits = '';
  chars.forEach(char => {
    digits += matchDigit(char)
  });
  
  if (digits.includes('?')) return '?'
  else return digits;
}