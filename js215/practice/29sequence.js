/*
The maximum sum subarray problem involves finding the maximum sum of a contiguous subsequence in an array of integers:

maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4] should be 6: [4, -1, 2, 1]

Easy case is when the whole array is made up of onl positive numbers and the maximum sum is the sum of the whole array.  If the array is made up of only negative numbers, return 0 instead

Empty array is considerd to have zero greatest sum.  Note that the empty array is also a valid subarray
=end
p max_sequence([]) == 0
p max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
p max_sequence([11]) == 11
p max_sequence([-32]) == 0
p max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) == 12

*/

/*
input
- 'numbers' : array of numbers : positive or negative

output
- integer : the maximum sum (0 or more) of a subset (in same order) of elements from 'numbers'

rules
- if all elements are negative, return 0
- if an empty array is given, return 0

notes


approach
- if empty, return 0
- if all elements are negative, return 0

- declare 'subarrays' as empty array to collect all possible subarrays
- get all possible subarrays (same order)
  - iterate start from 0 to numbers.length
    - iterate finish from start + 1 to numbers.length
      - slice the array from start to finish add it to 'subarrays'

- filter results to find maximum sum and return it

*/
function max_sequence(numbers) {
  if (numbers.length === 0) return 0;
  if (numbers.every(num => num < 0)) return 0;

  let arraySum = array => array.reduce((sum, num) => sum + num);

  let subarrays = [];
  for (let start = 0; start < numbers.length + 1; start += 1) {
    for (let finish = start + 1; finish < numbers.length + 1; finish += 1) {
      let sub = numbers.slice(start, finish);
      subarrays.push(sub);
    }
  }

  let output = subarrays.reduce((max, array) => {
    let sum = arraySum(array);
    if (sum > max) return sum;
    else return max;
  }, 0);

  return output;
}

console.log(max_sequence([]) === 0);
console.log(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(max_sequence([11]) === 11);
console.log(max_sequence([-32]) === 0);
console.log(max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12);