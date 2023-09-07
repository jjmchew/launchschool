const rlSync = require('readline-sync');

let bill = rlSync.question('What is the bill? ');
bill = parseFloat(bill, 10);

let tipPct = rlSync.question('What is the tip percentage? ');
tipPct = parseFloat(tipPct, 10)/100;

console.log(`The tip is $${(bill * tipPct).toFixed(2)}`);
console.log(`The total is $${(bill * (1 + tipPct)).toFixed(2)}`);
