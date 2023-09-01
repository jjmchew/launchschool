function addReverse(arr) {
  let newArr = arr.slice(0);
  let index = arr.length;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[index] = arr[i];
    index++;
  }
  return newArr;
}

let arr = [1, 2, 3]
console.log(addReverse(arr));
console.log(addReverse(['a', 'b', 'c', 'd']));
