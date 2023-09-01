function unshift(ary, val) {
  let newLength = ary.length + 1;
  ary.length = newLength;

  let previous = val;
  let tmp;
  for (let i = 0; i < ary.length; i++) {
    tmp = ary[i];
    ary[i] = previous;
    previous = tmp;
  }
  return newLength;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
