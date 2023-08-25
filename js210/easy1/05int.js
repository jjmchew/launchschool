const rlSync = require('readline-sync');

let integer = rlSync.question('Please enter an integer greater than 0: ');
integer = parseInt(integer, 10);


let mode;
do {
  mode = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

  if (mode === 's' || mode === 'p') break;
  console.log('Please enter "s" or "p"');
} while (true);

let nums = [];
for (let num = 1; num <= integer; num++) {
  nums.push(num);
}

if (mode === 's') {
  let sum = nums.reduce((sum, num) => sum += num, 0);
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (mode === 'p') {
  let product = nums.reduce((tot, num) => tot *= num, 1);
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
}
