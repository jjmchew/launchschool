/*
Write a function that displays an 8-pointed star in an nxn grid,
where n is an odd integer that is supplied as an argument to the function.
The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

Examples:

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

*/

/*
elapsed:  19 mins


input
- integer n : defines the size of the star

output
- a single string that outputs to an 8-pointed star

rules
- n >= 7
- n is an odd integer

data structure
- use arrays to store each line of stars (can reverse or join, as necessary)
- each line of stars is a string (of spaces and '*')

approach
- build top points:
    - always 3 stars
    - spaces between stars is (n - 3) / 2
  - there will be Math.floor(n / 2) lines
  - iterate creating lines from 0 to Math.floor(n/2) - 1
    - leading spaces are the same as line index #
    - between spaces start at (n-3)/2 and decrease by 1

- add middle line: n # of stars in a line
- bottom points: 'reverse' top points

- return output joined with '\n' between each line


notes
- n = 9
line  leading sp    between sp
 0        0            3        ( 9 - 3 ) / 2
 1        1            2        always decreases by 1
 2        2
*/

star(7);

star(9);

function star(n){
  if (n < 7) {
    console.log('please use n > 7');
    return;
  }
  let repeat = (char, num) => {
    let output = '';
    for (i = 0; i < num; i += 1) {
      output += char;
    }
    return output;
  }
  let top = () => {
    let lines = [];
    let spaceBetween = (n - 3) / 2;
    for (let line = 0; line < Math.floor(n/2); line += 1) {
      lines.push(
        repeat(' ', line) +
        "*" + repeat(' ', spaceBetween) +
        "*" + repeat(' ', spaceBetween) +
        "*" +
        repeat(' ', line)
      );
      spaceBetween -= 1;
    }
    return lines;
  }
  let output = [...top(), repeat('*', n), ...top().reverse()];
  console.log(output.join('\n'));
  return output.join('\n');
}