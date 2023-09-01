function pop(arr) {
  if (arr.length === 0) return undefined;
  let last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

function push(arr, ...values) {
  values.forEach(value => {
    arr[arr.length] = value;
  });
  return arr.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
