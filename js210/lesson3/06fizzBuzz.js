// Version 1
/*
function fizzbuzz() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) console.log('FizzBuzz');
    else if (num % 3 === 0) console.log('Fizz');
    else if (num % 5 === 0) console.log('Buzz');
    else console.log(num);
  }
}
*/

// Further Exploration
function fizzbuzz() {
  for (let num = 1; num <= 100; num++) {
    console.log(
      (num % 3 === 0 ? 'Fizz' : '') +
      (num % 5 === 0 ? 'Buzz' : '')
      ||
      num
    );
  }
}

fizzbuzz();
