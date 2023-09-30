/*
Write a function that displays a four-pointed diamond in an nxn grid, 
where n is an odd integer supplied as an argument to the function. 
You may assume that the argument will always be an odd integer.

Examples:

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

diamond(5);
  *  
 *** 
*****
 *** 
  *  

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/


/*
elapsed:  34 mins

input
- integer 'n' : always odd

output
- 1 string : displays as a diamond on the screen

rules
- diamond is symmetric
- will have 'n' lines total
- line 1 has 1 star, line 2 has 2 stars, ... line Math.ceil('n/2') has 'n' stars ... [back down] line 'n' has 1 star

            leading
n    line   spaces    # stars
1      1      0         1

3      1      1         1    total spaces = (n - stars)
       2      0         3    leading spaces = (n - stars) / 2
       3      1         1

5      1      2         1
       2      1         3
       3      0         5    'middle row' = Math.ceil(n/2)
       4      1         3
       5      2         1

7      1                1    # of stars is a sequence of odd numbers, from 1
       2                3     
       3                5
       4                7     up to n @ Math.ceil(n/2)
       5                5
       6                3
       7                1

test example n = 3;
line   numStar  starRef    
         1       [0]
  1      3       [0, 1]
  2      1       [0, 1, 3]
  3      -1      [0, 1, 3, 1]

data structure
- collect output within an array of strings (each line)
- iterate using for loops to use indexes

approach
- declare 'output' array, initially empty
- generate a 'reference' array indicating how many stars are required for each line
  - e.g., diamond(5) reference: [0, 1, 3, 5, 3, 1] - index refers to line #, value is # of stars
  - initialize numStar variable = 1;
  - initialize starRef array as [0];
  - iterate from line 1 to n
    - push numStar to starRef array
    - if value of line is less than Math.ceil(n/2) increment numStar by 2
    - otherwise, decrement numStar by 2

- need to iterate from 1 to n (line)
  - generate correct line (terminated by new line) and concatenate with 'output'
    - look-up # of stars from reference array
    - calculate # of (leading and trailing) spaces (n - stars) / 2
    - create output line by concatenating: leading spaces + stars * trailing spaces (use helper function)

- return 'output' joined with '\n'
*/

diamond(5);
diamond(7);

function diamond(n) {
  let generateStarRef = () => {
    let numStar = 1;
    let starRef = [0];
    for (let line = 1; line <= n; line += 1) {
      starRef.push(numStar);
      if (line < Math.ceil(n/2)) numStar += 2;
      else numStar -= 2;
    }
    return starRef;
  };
  let makeString = (char, number) => {
    let output = '';
    for (let i = 0; i < number; i += 1) {
      output += char;
    }
    return output;
  };
  let outputStars = (numStars) => {
    if (numStars === 1) return '*';
    else {
      return "*" + makeString(' ', numStars - 2) + "*";
    }
  };
  
  let starRef = generateStarRef(n);
  let output = [];
  for (let line = 1; line <= n; line += 1) {
    let spaces = (n - starRef[line]) / 2;
    output.push(
      makeString(' ', spaces) +
      outputStars(starRef[line]) +
      makeString(' ', spaces));
  }
  console.log(output.join('\n'));
  return output.join('\n');
}