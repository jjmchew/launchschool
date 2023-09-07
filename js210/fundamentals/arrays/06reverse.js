function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    let output = [];
    for (let i = inputForReversal.length - 1; i >= 0; i--) {
      output.push(inputForReversal[i]);
    }
    return output;
  }
  if (typeof inputForReversal === 'string') {
    let output = '';
    for (let i = inputForReversal.length - 1; i >= 0; i--) {
      output += inputForReversal[i];
    }
    return output;
  }
  return 'undefined';
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
