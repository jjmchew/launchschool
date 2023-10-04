/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

/*
elapsed:  16 mins



input
- currentAge : user prompt
- retireAge : user prompt

output
- 2 strings:
  - "It's {currentYear}. You will retire in {retireYear}." 
  - "You only have {workYears} years of work to go!"

rules
- assume basic input validation
  - no blanks, no alpha, greater than zero
  - any integer number okay
  - retireAge >= currentAge

approach
- use readline-sync for user input
  - use regex for number validation
  - then convert to Number type and check years are positive
  - check that retireAge >= currentAge on second input
- use Date.now() to get current year
- calculate retireAge - currentAge; assign to 'workYears'
- use interpolation to output required strings

*/

const rlSync = require('readline-sync');
let isValid = (str, min = 1) => {
  return /^[1-9][0-9]*$/.test(str) && Number(str) >= min;
};
let currentAge;
do {
  currentAge = rlSync.question('What is your age? ');
  if (isValid(currentAge)) break;
  else console.log('Please enter a proper age.');
} while (!isValid(currentAge));
currentAge = parseInt(currentAge, 10);

let retireAge;
do {
  retireAge = rlSync.question('At what age would you like to retire? ');
  if (isValid(retireAge, currentAge)) break;
  else console.log('Please enter a reasonable age.');
} while (!isValid(retireAge, currentAge));
retireAge = parseInt(retireAge, 10);

let workYears = retireAge - currentAge;
let currentYear = new Date(Date.now()).getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + workYears}.`);
console.log(`You only have ${workYears} years of work to go!`);
