function lastIndexOf(ary, val) {
  let index = -1;
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] === val) index = i;
  }
  return index;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1
