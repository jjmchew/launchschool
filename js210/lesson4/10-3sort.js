function sortDescending(arr) {
  let newArr = arr.slice(0);
  newArr.sort((a, b) => b - a);
  return newArr;
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]
