function shift(arr) {
  if (arr.length === 0) return undefined;
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length = arr.length - 1;
  return first;
}

function unshift(arr, ...args) {
  let dup = arr.slice();
  arr.length = args.length;
  for (let i = 0; i < args.length; i++) {
     arr[i] = args[i];
  }
  for (let i = 0; i < dup.length; i++) {
    arr[arr.length] = dup[i];
  }
  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
