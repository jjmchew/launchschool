const rlSync = require('readline-sync');

function getNumbers() {
  let numbers = [];
  numbers.push(parseInt(rlSync.question('Enter the 1st number: '), 10));
  numbers.push(parseInt(rlSync.question('Enter the 2nd number: '), 10));
  numbers.push(parseInt(rlSync.question('Enter the 3rd number: '), 10));
  numbers.push(parseInt(rlSync.question('Enter the 4th number: '), 10));
  numbers.push(parseInt(rlSync.question('Enter the 5th number: '), 10));
  return numbers;
}

let numbers = getNumbers();
let search = parseInt(rlSync.question('Enter the last number: '), 10);
const appears = numbers.includes(search);

console.log(`The number ${search} ${appears ? 'appears in' : 'does not appear in'} [${numbers.join(', ')}].`);


