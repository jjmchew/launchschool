function shift(ary) {
  let first = ary[0];
  let newLength = ary.length - 1;
  for (let i = 0; i < ary.length - 1; i++) {
    ary[i] = ary[i + 1];
  }
  ary.length = newLength;
  return first;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
