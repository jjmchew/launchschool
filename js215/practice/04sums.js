// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

/*
input
- array of integers

output
- integer : index of array OR -1

rules
- if sum of integers to L of N === sum of integers to the R of N
- assume input is always an array, could be any elements
  - for non-integers : these can represent index N
  - treat non-integers using default JS type coercion rules
  - non-numbers could be: undefined, null, NaN, strings, objects, sub-arrays, etc.
  - assume no empty slots
- return the first N if there are multiple possible answers


example
[1, 2, 3, 4, 5]
N   left      right
0   n/a       2, 3, 4, 5
1   1         3, 4, 5

data
- arrays - can use iterating methods

approach
- iterate through each index in the array
  - check if sum to L (use reduce) is equal sum to R (use reduce)
    - create a L array (elements to the L of N)
    - create a R array (elements to the R of N)
    - check if the sums are equal return index (n)

- if no other return value, return -1;

...

*/

console.log(findN([1, 2, 3, 4, 5]) === -1);
console.log(findN([1, 2, 1]) === 1);
console.log(findN([1, 1, 1, 0, 3]) === 3);
console.log(findN([1, null, 1]) === 1);
console.log(findN([1, 0, null, 1]) === 1);
console.log(findN([1, , 1]) === 1);
console.log(findN([]) === -1);

function findN(numbers) {
  for (let n = 1; n < numbers.length - 1; n += 1) {
    let L = numbers.slice(0, n);
    let R = numbers.slice(n + 1);
    if (L.reduce((sum, num)=> sum + num, 0) === R.reduce((sum, num)=> sum + num, 0)) {
      return n;
    }
  }
  return -1;
}
