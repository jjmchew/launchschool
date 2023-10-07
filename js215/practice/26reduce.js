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
input
- integer 'n' : some number
- integer 'k' : the # of digits to remove from 'n'

output
- a string : with the lowest possible number after removing 'k' digits from 'n'

rules
- order of digits (in output) must remain unchanged from 'n'
- leading zeros are 'dropped' assuming the number is converted to a base-10 number

questions
- arguments
  - too many?  not enough?  throw error
  - wrong type?  throw error
- numbers
  - size?
  - BigInt?


notes
- probably easiest just to create a set of all possible strings and then check to see which is least
- 

approach
- convert 'n' to string
- declare variable 'options' which contains as many copies of array of digits of 'options' as there are digits
  - i.e., 5 digits, 5 subarrays of the (string) digits of 'n'
- remove all possible combos of 'k' digits : store in 'options'
  - remove digits 1 at a time:  i.e., iterate 'k' number of times to remove digits
      - iterate digit from 0 to (current) length of n
        - iterate through options and remove that digit from each entry in 'options'

- filter 'options' for smallest coerced number
- return smallest number
*/
'use strict';

function solve(n, k) {
  let deDup = array => {
    let seen = {};
    return array.filter(subArray => {
      if (seen[subArray]) {
        return false;
      } else {
        seen[subArray] = 1;
        return true;
      }
    });
  };
  let strNum = n.toString().split('');
  let options = [strNum];
  
  [...Array(k).keys()].forEach((_, idx) => {
    while (options[0].length >= strNum.length - idx) {
      let iteration = options.shift();
      let length = iteration.length;
      for (let i = 0; i < length; i += 1) {
        let newEntry = iteration.slice();
        newEntry.splice(i, 1);
        options.push(newEntry);
      }
    }
    options = deDup(options);
  });
  options = options.filter(array => array.length === strNum.length - k);
  options = options.map(array => array.join(''));

  let output = options.reduce((min, str) => {
    if (parseInt(str, 10) < parseInt(min, 10)) return str;
    else return min;
  }, n);
  console.log(output);
  return output;
}

console.log(solve(123056,1) === '12056');
console.log(solve(123056,2) === '1056');
console.log(solve(123056,3) === '056');
console.log(solve(123056,4) === '05');
console.log(solve(1284569,1) === '124569');
console.log(solve(1284569,2) === '12456');
console.log(solve(1284569,3) === '1245');
console.log(solve(1284569,4) === '124');