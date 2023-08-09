// Question 1
/*
let rl = require('readline-sync');
let age = rl.question('What is your age? ');
age = parseInt(age);

for (let x = 10; x <= 40; x += 10) {
  console.log(`In ${x} years, you'll be ${age + x} years old.`);
}
*/

// Question 2
/*
function factorial(num) {
  let result = 1;
  for (let x = 2; x <= num; x += 1) {
    result *= x
  }
  return result;
}
*/

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

// Question 3
/*
let counter = 0;

while (counter = 1) { // this line assigns the value 1 to counter, which returns 1 - a truthy value
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
*/
// Since assignmnt is used rather than a conditional expression, the result is always truthy and the loop continues forever.
// Also since counter is repeatedly reset to 1, the break clause is never executed since counter will only ever increment to 2.

// Question 4
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
// This should print 1, 2, 3, 4, 5 to the screen.

// Question 5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = -1;
while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// Question 6
function factorial(num) {
  if (num === 1) { return 1; }

  return num * factorial(num -= 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
