function join(arr, str) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += String(arr[i]);
    if (i !== arr.length - 1) {
      output += str;
    }
  }
  return output;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
