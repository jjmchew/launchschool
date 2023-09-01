function lastNOf(arr, count) {
  if (arr.length - count < 0) count = arr.length; // Question 7
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
console.log(lastNOf(digits, 9));    // returns [16, 23, 42] (appears to the same)
/*
The default behaviour of slice will take a negative argument and count from the *last* element of the array.
*/


