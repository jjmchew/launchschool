// Version 1 : TOO SLOW - CAN'T KEEP CALCULATING FIB # recursively
/*
function findFibonacciIndexByLength(num) {
  let digits = function digits(number) {
    return BigInt(String(number).length);
  };

  let numDigits;
  let index = 0n;
  do {
    index++;
    let fibNum = fib(index);
    numDigits = digits(fibNum);
    console.log(fibNum, '   ', numDigits);
  } while (numDigits < num);

  return index--;
}

function fib(index) {
  if (index === 1n || index === 2n) return 1n;
  return fib(index - 2n) + fib(index - 1n);
}
*/


// console.log(fib(1n));
// console.log(fib(10n));
// console.log(fib(11n));
// console.log(fib(12n));
// console.log(fib(13n));

// Version 2 (after looking at solution)
function findFibonacciIndexByLength(digits) {
  if (digits <= 1n) return 1n;

  let index = 2n;
  let num1 = 1n;
  let num2 = 1n;
  let numDigits;
  do {
    index++;
    let fib = num1 + num2;
    numDigits = BigInt(String(fib).length);
    // console.log(`${index}     ${fib}`);
    [num1, num2] = [num2, fib];
  } while(numDigits < digits);

  return index--;
}


console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log('====');
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log('====');
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log('====');
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log('====');
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log('====');
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log('====');
console.log(findFibonacciIndexByLength(10000n) === 47847n);
// The last example may take a minute or so to run.
