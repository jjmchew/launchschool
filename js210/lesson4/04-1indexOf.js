function indexOf(ary, val) {
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] === val) return i;
  }
  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1
