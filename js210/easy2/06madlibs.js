const rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adj = rlSync.question('Enter an adjective: ');
let adverb = rlSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adj} ${noun} ${adverb}? That's hilarious!`);
