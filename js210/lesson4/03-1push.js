function push(ary, value) {
  ary.push(value);
  return ary.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
