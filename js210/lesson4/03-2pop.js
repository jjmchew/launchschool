function pop(ary) {
  let last = ary[ary.length - 1];
  ary.length = ary.length - 1;
  return last;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]
