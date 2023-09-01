function slice(arr, startIndex, endIndex) {
  let newArr = [];
  for (let i = startIndex; i < endIndex; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function splice(arr, startIndex, numValues) {
  let newArr = slice(arr, startIndex, startIndex + numValues);
  for (let i = startIndex; i < arr.length; i++) {
    arr[i] = arr[i + numValues];
  }
  arr.length = arr.length - numValues;
  return newArr;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
