function listReverse(ary) {
  let reversed = [];
  for (let i = ary.length - 1; i >= 0; i--) {
    reversed.push(ary[i]);
    console.log(ary[i]);
  }
  return reversed;
}

console.log(listReverse([1, 2, 3, 4, 5]));
