function missing(arr) {
  let newArr = [];
  for (let num = arr[0] + 1; num < arr[arr.length - 1]; num++) {
    if (arr.indexOf(num) === -1) newArr.push(num);
  }
  return newArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
