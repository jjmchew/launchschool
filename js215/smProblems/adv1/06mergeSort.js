/*

Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example. Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]
We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]
Write a function that takes an array argument and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.

Examples:
mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

*/

/*
elapsed:  2 hrs



input
- 'inputArray': array of elements

output
- NEW array : same elements as inputArray, but sorted in ascending order (smallest to largest)

rules
- must use mergeSort algorithm
- assume all data is same type (string or number)
- implement a recursive algorithm
- assume no nested objects / arrays in 'inputArray'
- input validation? ensure argument is an array?


test
[6, 2, 7, 1, 4]
[ [6, 2], [7, 1], [4] ]
[ [[6], [2]], [[7], [1]], [[4]] ]
[ [2, 6], [1, 7], [4] ]

notes
- need to deal with odd number of elements, ensure 'hanging' element is incorporated properly
  - could have merged in sequence: first 2 then the next 2
- approach by merging more than 2 arrays together?
  - may need to check 'depth' of array (i.e., array isn't nested)
- need to be able to check # of elements in array at lowest depth?
  - can keep subdividing until # of elements in array is just 1

nestArray approach
- create an 'outputArray' - empty array
- determine iteration finish ('iterationEnd') (will depend on whether inputArray.length is even or odd) (helper function)
- iterate through 'inputArray' from 0 to iterationEnd
  - push pairs of elements [i, i + 1] to 'outputArray' in order
- if inputArray.length was odd, push the last element as an array to 'outputArray'
- test:
    [1, 2, 3] : iterationEnd = 0 (length - 3)
    [1, 2] : iterationEnd = 0 (length - 2)

merge approach
- assume 3 inputs will be considered, ignore any that are 'undefined'
- make copies of each array (to not mutate)
- combine all arrays into 1 nested array to facilitate iteration (each array referenced by index #) 'arrays'
- iterate while subarrays exist (arrays.length > 0)
    - check element 0 for each existing subarray
    - find the index of array with the smallest element
    - use shift to take the first element of that indexed array and push to 'outputArray'
        - if that array's length becomes zero, remove the empty array from 'arrays'
- return outputArray

approach
- make a copy of 'inputArray' to work with
- if inputArray.length > 2, break into 2 parts
  - call mergeSort on each part
- if inputArray.length <= 2, merge the parts


[9, 5, 7, 1, 8, 2, 3]
[[9, 5, 7], [1, 8, 2, 3]]  (break in half)
[[ [9], [5, 7] ], [ [1, 8], [2, 3] ]] (break each part in half again, length is > 2)
[[5, 7, 9], [1, 2, 3, 8]] (merge if length of each sub is 2 or less)
[[1, 2, 3, 5, 7, 8, 9]] ()
*/

console.log(mergeSort([9]));           // [9]
console.log(mergeSort([9, 5]));
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([9, 5, 7, 1, 8, 2, 3]));  // [1, 2, 3, 5, 7, 8, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

function mergeSort(inputArray) {
  let splitArray = inputArray => {
    let splitIdx = Math.floor(inputArray.length / 2);
    return [inputArray.slice(0,splitIdx), inputArray.slice(splitIdx)];
  };
  let outputArray;
  if (inputArray.length > 2) {
    let [leftPart, rightPart] = splitArray(inputArray);
    leftPart = mergeSort(leftPart);
    rightPart = mergeSort(rightPart);
    outputArray = merge(leftPart, rightPart);
  } else {
    let pair = inputArray.map(element => [element]);
    outputArray = merge(...pair);
  }
  return outputArray;
}

// console.log(merge([1], [2, 6], [1, 7])); // [1, 1, 2, 6, 7]

function merge(array1, array2, array3) {
  let ar1 = array1.slice();
  let ar2 = array2 ? array2.slice() : [];
  let ar3 = array3 ? array3.slice() : [];

  let getSmallestIdx = (arrays) => {
    return arrays.map((array, idx) => {
      return { element: array[0], index: idx };
    }).reduce((returnObj, obj) => {
      if (obj.element < returnObj.element) return obj;
      else return returnObj;
    }).index;
  };
  
  let clearEmpty = (arrays) => {
    let cleared = undefined;
    do {
      cleared = undefined;
      for (let i = 0; i < arrays.length; i += 1) {
        if (arrays[i].length === 0) cleared = i;
      }
      if (cleared !== undefined) arrays.splice(cleared, 1);
    } while (cleared !== undefined);
  };

  let arrays = [ar1, ar2, ar3];
  clearEmpty(arrays);
  let outputArray = [];
  while (arrays.length > 0) {
    let smallestIdx = getSmallestIdx(arrays);
    outputArray.push(arrays[smallestIdx].shift());
    clearEmpty(arrays);
  }

  return outputArray;
}


// clearEmpty([[], [], [1, 2, 3]]);
// clearEmpty([[1, 2, 3], [], []]);
// clearEmpty([[], [1, 2, 3], [1,2], []]);
// clearEmpty([[], []]);
// clearEmpty([[]]);

let nestArray = (inputArray) => {
  let isOdd = num => num % 2 === 1;
  let outputArray = [];
  let iterationEnd;
  if (isOdd(inputArray.length)) iterationEnd = inputArray.length - 3;
  else iterationEnd = inputArray.length - 2;
  for (let i = 0; i <= iterationEnd; i += 2) {
    outputArray.push([inputArray[i], inputArray[i + 1]]);
  }
  if (isOdd(inputArray.length)) outputArray.push([inputArray[inputArray.length - 1]]);
  return outputArray;
};