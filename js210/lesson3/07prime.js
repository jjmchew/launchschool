// Version 1
/*
function isPrime(number) {
  if (number === 1 || number === 0) return false;

  for (let num = 2; num <= number / 2; num++) {
    if (number % num === 0) return false;
  }
  return true;
}
*/

// Further Exploration
function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) return false;

  for (let num = 3; num <= number / 2; num += 2) {
    if (number % num === 0) return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
