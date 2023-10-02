/*
Notes:
This solution was pulled from someone else who used very similar logi to what I did
- however, in the final section after the 'pushElements' function completes, it does NOT work
  - ALL of the remaining elements from the incomplete array are not added (need a slice)
  - the if condition is incorrect: arr1Count will equal arr1.length, NOT arr1.length - 1
  - it was LUCK that the test cases provided worked, since the test cases were incomplete and didn't fully test the function
*/

function emptyArray(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  } else {
    return false;
  }
}

function pushElements(mergedArr, arr1, arr2) {
  let arr1Count = 0;
  let arr2Count = 0;

// loop does not push the greatest element because it is not < anything (also, the loop ends before such a check)
  while (arr1Count < arr1.length && arr2Count < arr2.length) { 
    if (arr1[arr1Count] < arr2[arr2Count]) { 
      mergedArr.push(arr1[arr1Count]);
      arr1Count += 1;
    } else {
      mergedArr.push(arr2[arr2Count]);
      arr2Count += 1;
    }
  }

  return [arr1Count, arr2Count];
}

function merge(arr1, arr2) {
  let emptyCheck = emptyArray(arr1, arr2);
  if (emptyCheck) return emptyCheck;

  let mergedArr = [];

  let [arr1Count, arr2Count] = pushElements(mergedArr, arr1, arr2);
  console.log(arr1Count, arr2Count);

// the array with the missing element is the one that did not increment up to array.length (breaking the loop)
  if (arr1Count === arr1.length - 1) { 
    console.log('first condition');
    mergedArr.push(arr1[arr1Count]);
  } else {
    console.log('second condition');
    mergedArr.push(arr2[arr2Count]);
  }

  return mergedArr;
}

console.log(merge([1, 5], [2, 6, 8, 9]));      // [1, 2, 5, 6, 8, 9]
console.log('==========');
console.log(merge([1, 5, 9, 10], [2, 6]));      // [1, 2, 5, 6, 9, 10]
// console.log(merge([1, 5, 9], [2, 6, 8]));
// [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));
//  // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));
// // [1, 4, 5]
// console.log(merge([1, 4, 5], []));
//  // [1, 4, 5]