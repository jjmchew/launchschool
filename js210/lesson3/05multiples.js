// Version 1
/*
function logMultiples(number) {
  for (let num = 100; num >= number; num--) {
    if (num % number === 0 && num % 2 !== 0) console.log(String(num));
  }
}
*/

// Further Exploration
function logMultiples(number) {
  maxMultiple = Math.floor(100 / number) * number;
  for (let num = maxMultiple; num >= 0; num -= number) {
    if (num % 2 !== 0) console.log(num);
  }
}

logMultiples(17);
console.log('===========');
logMultiples(21);
