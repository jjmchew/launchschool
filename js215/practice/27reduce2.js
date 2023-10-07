/*
676. Integer reduction
6 kyu
(https://www.codewars.com/kata/59fd6d2332b8b9955200005f/ruby) 

In this Kata, you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, without changing the order of the digits in n. Return the result as a string.
Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'.
Note also that the order of the numbers in n does not change: solve(1284569,2) = '12456', because we have removed 8 and 9.
More examples in the test cases.
=end

# p solve(123056,1) == '12056'
# p solve(123056,2) #== '1056'
# p solve(123056,3) == '056'
# p solve(123056,4) == '05'
# p solve(1284569,1) == '124569'
# p solve(1284569,2) == '12456'
# p solve(1284569,3) == '1245'
# p solve(1284569,4) == '124'
*/

/*
2nd attempt
***********  UNFINISHED  ************
- doing it this way seems MUCH harder
- it was conceptually easier to just remove 1 digit from each of the 'options' (as per previous solution) and then deDup
  - there are a LOT of combinations and moving the indexes appropriately seems non-trivial
    - especially trying to keep track of which index was last moved and will move as per incrementIndexes function (no context)
      - could possibly return a function and thus keep track of iterations, etc. with some 'metadata'
**************************************


input
- n : input number, multiple digits
- k : input number, number of digits to remove

output
- 'output' string : string digit of remaining digits representing the smallest possible number

rules
- order of given digits in 'n' must remain unchanged, just remove 'k' digits

notes
- determine how many digits in 'output' (n.split('').length - k) : 'outputLen'
- create an array 'options' of all possible combos of 'outputLen' digits
- 3 indexes: idx1 (start), idx2 (middle), idx3 (end)
  - always in that order
  - slowly move idx3 out; idx2 always goes from start to idx3 - 1, then next iteration

test
digits  012345  012345  012345  0123456
index   01234   012     01      01234  
        0123 4  01 2    0 1     0123 4 
        012 34  0 12    0  1    012 34 
        01 234  01  2   0   1   01 234 
        0 1234  0 1 2   0    1  0 1234 
         01234  0  12    01     0123  4
                01   2   0 1    012 3 4
                0 1  2   0   1
                0  1 2    01 
                0   12    0 1 
                 01  2    0  1
                 0 1 2     01 
                 0  12     0 1
                  01 2      01
                  0 12        
                   012        


index   0 1 2 3 4           012
        0 1 2 3 4           013
        0 1 2 3 5           014
        0 1 2 4 5           015
        0 1 3 4 5           025
        0 2 3 4 5           035
        1 2 3 4 5           045
                            145
                            245
                            345

- index incrementing pattern:
    - each index starts in consecutive order (i.e., 0, 1, 2, 3, 4, ...)
    - advance the len-1 index by 1
    - 'reset' the len-2 index (len-3 index + 1)
        - increment this until it is len-1 index - 1
    - etc.
    - make the outer bounds 1 bigger
      - 'reset' the interior indexes
      - next 'outside' is 1 bigger, move up next interior

    - until last index is at strArr.length - 1, and each prior index is 1 less


approach
- convert n to an array of string digits 'strArr'
- determine how many digits in 'output' (strArr.length - k) : 'outputLen'

- create an array 'options' to store all possible INDEX LOCATION combinations for 'outputLen' # of digits
  - use an array 'index', each element corresponds to an digit index location
  - each index starts in consecutive order (i.e., 0, 1, 2, 3, 4, ...) 
  - iterate while !endIndexPosition() (helper fct)
    - increment indexes appropriately (helper fct)
    - push this new array to 'options'

- map 'options' indexes to actual strings using digits at those index locations
- reduce to the smallest coerced Number, return that string

*/

function solve(n, k) {
  let strArr = n.toString().split('');
  let outputLen = strArr.length - k;
  let endIndexPosition = () => {
    for (let i = 0; i < index.length; i += 1) {
      if (index[i] !== indexFinish[i]) return false;
    }
    return true;
  };
  let incrementIndexes = () => {
    for (let i = index.length - 1; i >= 0; i -= 1) {
      if (index[i] === indexFinish[i]) continue;
      else if (index[i] < indexFinish[i]) {
        index[i] += 1;
        break;
      }
    }
  };
  let makeStr = index => {
    let newStr = '';
    index.forEach(i => newStr += strArr[i]);
    return newStr;
  };

  let index = [...Array(outputLen).keys()];
  let indexFinish = [...Array(outputLen).keys()].map(num => num + k);
  
  let options = [index.slice()];
  console.log(index, indexFinish);

  while (!endIndexPosition()) {
    incrementIndexes();
    options.push(index.slice());
  }
  console.log(options);
  options = options.map(index => makeStr(index));
  console.log(options);
  let output = options.reduce((min, str) => {
    if (parseInt(min, 10) < parseInt(str, 10)) return min;
    else return str;
  }, 'Infinity');
  console.log(output);
  return output;
}

// console.log(solve(123056,1) === '12056');
// console.log(solve(123056,2) === '1056');
// console.log(solve(123056,3) === '056');
console.log(solve(123056,4) === '05');
// console.log(solve(1284569,1) === '124569');
// console.log(solve(1284569,2) === '12456');
// console.log(solve(1284569,3) === '1245');
// console.log(solve(1284569,4) === '124');
