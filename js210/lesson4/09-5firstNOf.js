function firstNOf(arr, count) {
  let newArr = [];
  for (let i = arr.length - count; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]
