/*
elapsed:  24 mins



input
- 'inputArray' : array of elements

output
- 'outputArray' : ordered array of elements

rules
- must use merge sort algorithm
- implement recursively (a recursive algorithm)
- assume no input validation, all array elements are same type, not empty, etc.

approach
- if 'inputArray' has 1 element - return it
- if 'inputArray' has more than 2 elements in it, split into 'leftPart' and 'rightPart'
  - mergeSort each part
  - merge both parts;  return this
- if it has 2 elements convert both to arrays and merge

merge approach (elapsed 16.5 mins)
- create an empty array 'outputArray'
- iterate while length of both arrays is not 0
  - compare first elements of both arrays
    - use shift to push the smaller (only) element to 'outputArray'
- if either array has a remaining length !== 0, concat it to the end of 'outputArray'
- return 'outputArray'
*/

console.log(mergeSort([9, 5]));
console.log(mergeSort([9, 5, 7, 1]));
console.log(mergeSort([9, 5, 7, 1, 5]));
console.log(mergeSort([9]));
console.log(mergeSort([8, 3, 2, 5, 9, 1, 4, 6, 7]));

function mergeSort(inputArray) {
  if (inputArray.length === 1) return inputArray;

  let midIndex = Math.floor(inputArray.length / 2);
  let leftPart = inputArray.slice(0, midIndex);
  let rightPart = inputArray.slice(midIndex);

  return merge(mergeSort(leftPart), mergeSort(rightPart));
}

console.log(merge([5, 9], [1, 4, 7]));
console.log(merge([2], [1, 4, 7]));
console.log(merge([2, 5, 9], []));
console.log(merge([], [2, 5, 9]));

function merge(array1, array2) {
  let outputArray = [];
  let copy1 = array1.slice();
  let copy2 = array2.slice();

  while (copy1.length !== 0 && copy2.length !== 0) {
    outputArray.push(copy1[0] < copy2[0] ? copy1.shift() : copy2.shift());
  }

  outputArray = outputArray.concat(copy1.length === 0 ? copy2 : copy1);

  return outputArray;
}