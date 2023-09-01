function nthElementOf(arr, index) {
  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   // returns 16
console.log(nthElementOf(digits, 8));   // what does this return? undefined
console.log(nthElementOf(digits, -1));  // what does this return? undefined

digits[-1] = -42;
console.log(nthElementOf(digits, -1));
console.log(digits[-1]);
console.log(digits['-1']);    // Note that we are using a string here
console.log(digits);
