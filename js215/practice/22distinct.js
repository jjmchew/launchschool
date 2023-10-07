/*
https://launchschool.com/lessons/28467827/assignments/cec18cce

A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.

Example
distinctString(["d","b","c","b","c","a"], 2); // "a"

*/

/*
elapsed:  23 mins



input
- 'arr' : array of strings
- 'k' : integer  :  indicates the kth distinct string present

output
- string : the kth distinct string from 'arr'
            OR
           "" (no kth distinct string)

rules
- distinct string : that string shows up only once in 'arr'
- kth : based on index - lowest index distinct string is 1st (confirm if zero-based?)
        - if 'k' is negative, count from end (last distinct string is -1)

questions
- zero-based 'kth'?
- is "" considered a distinct string if it shows up on it's own in the 'arr'?
- assume only strings in 'arr'?  empty elements?  non-string elements?
  - how to address empty array?  just return '' (no distinct strings)
- ignore all non-element properties of 'arr'?
- can 'k' be negative?  how to treat -ve k?
- do input validation on 'k' to confirm it is an integer?
  - e.g., NaN? other?
***** QUESTIONS I FORGOT TO ASK *****
  - what if arguments are omitted?
  - what if k === 0?
  - sparse elements in 'arr'?

approach
- produce an array of 'distinct' strings
  - use filter to filter the given array on each element and see how many of those elements exist in the arr
  - if only 1 element exists, then keep that element
if k is positive:
  - return the (k - 1) element of 'distinct' (zero-based array indexes)
if k is negative:
  - return (distinct.length + k) element of 'distinct'


notes
- iterate through 'arr' with an index
- search of distinct string using indexOf !== current index
- use regex to match occurrences of each element
  - can use filter on 'arr'
- [a, b, c], -1 : length - 1
- [a, b, c], -2 : length - 2

*/

function distinctString(arr, k) {
  let distinct = arr.filter((str, idx, array) => array.filter(ele => ele === str).length === 1);
  console.log(distinct);
  let output = k < 0 ? distinct[distinct.length + k] : distinct[k - 1];
  if (output === undefined) return '';
  else return output;
}

console.log(distinctString(['aa', 'ab', 'aa'], 1) === 'ab');
console.log(distinctString(['aa', 'ab', 'aa'], 2) === '');
console.log(distinctString(['ac', 'aa', 'ab', 'aa'], -1) === 'ab');
console.log(distinctString(["d","b","c","b","c","a"], 2) === 'a');
console.log(distinctString(["b","c","b","c"], 2) === '');
console.log(distinctString(["d", "b","c","b","c", "a"], -2) === 'd');
console.log(distinctString(["d", "b","c","b","c", "a"], -1) === 'a');
console.log(distinctString([], -1) === '');
console.log(distinctString([], 3) === '');

