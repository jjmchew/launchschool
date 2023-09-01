function arrayStr(ary) {
  let output = '';
  for (let i = 0; i < ary.length; i++) {
    output += ary[i];
  }
  return output;
}

console.log(arrayStr([1, 'a', 4]));
console.log(arrayStr([1, 2, 3, 4]));
