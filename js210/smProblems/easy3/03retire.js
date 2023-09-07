const rlSync = require('readline-sync');

let age = parseInt(rlSync.question('What is your age? '), 10);
let retireAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);
const currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retireAge - age)}.`);
console.log(`You have only ${retireAge - age} years of work to go!`);
