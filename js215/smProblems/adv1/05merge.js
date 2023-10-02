/*
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Examples:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

*/

/*
elapsed:  24 mins



input
- array1, array2 : both sorted

output
- outputArray:  a combo of array1 and array2 in sorted order

rules
- do not mutate input arrays
- do not sort the outputArray (build it 1 element at a time)
- assume that empty arrays have no elements (no need to incorporate elements from that array)
- arrays can have different lengths
- assume that elements are numeric? (vs strings)  (how to deal with nested objects / arrays?)
- sparse arrays?

approach
- create an empty 'outputArray'
- initialize 'index1' counter at 0
- initialize 'index2' counter at 0
- loop
    - check element at 'index1' in array1 is < element at 'index2' in array2
    - if so push array1 element to 'outputArray'
        - increment 'index1'
    - if not, push array2 element to 'outputArray'
        - increment 'index2'
  - continue looping while 'index1' < 'array1'.length AND 'index2' < 'array2'.length
- check if index1 reached end of array1
  - if so, add remaining elements of array2 (can concat a slice from index2) to output
  - if not, add remaining elements of array1


test [1, 5], [2, 6, 8]
# outputAray  index 1  index2
    []          0         0 
0   [1]         1         0
1   [1, 2]      1         1
2   [1, 2, 5]   2         1
3   [1, 2, 5, ]

*/

merge([1, 5], [2, 6, 8]);      // [1, 2, 5, 6, 8]
merge([1, 5, 9], [2, 6]);      // [1, 2, 5, 6, 9]
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]


function merge(array1, array2) {
  let outputArray = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] < array2[index2]) {
      outputArray.push(array1[index1]);
      index1 += 1;
    } else {
      outputArray.push(array2[index2]);
      index2 += 1;
    }
  } 
  if (index1 === array1.length) {
    outputArray = outputArray.concat(array2.slice(index2));
  } else {
    outputArray = outputArray.concat(array1.slice(index1));
  }
  console.log(outputArray);
  return outputArray;
}