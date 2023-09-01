function concat(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr[i] = arr1[i];
  }
  for (let i = arr1.length; i < arr1.length + arr2.length; i++) {
    newArr[i] = arr2[i - arr1.length];
  }
  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
