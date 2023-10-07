/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 

*/

/*
input
- an integer may have more than 1 digit

*/

function digitalRoot(n) {
  let getDigits = num => {
    return num.toString().split('').map(element => parseInt(element, 10));
  };
  
  if (n < 10) return n;
  else {
    return digitalRoot(getDigits(n).reduce((sum, num) => sum + num));
  }
}

console.log(digitalRoot(1234) === 1);
console.log(digitalRoot(16) === 7);
console.log(digitalRoot(942) === 6);
console.log(digitalRoot(132189) === 6);
console.log(digitalRoot(493193) === 2);