const rlSync = require('readline-sync');

let phrase = rlSync.question('Please enter a phrase: ');
let regex = /( |[^a-zA-Z])/g
let countPhrase = phrase.replaceAll(regex, '');

console.log(countPhrase);
console.log(`There are ${countPhrase.length} alphabetic characters in "${phrase}".`);
