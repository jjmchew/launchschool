// Question 1
let rlSync = require('readline-sync');
let name = rlSync.question("What is your name? ");
console.log(`Hello, ${name}!`);

// Question 2
let firstName = rlSync.question("What is your first name? ");
let lastName = rlSync.question("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);

// Question 3
let age = Number(rlSync.question("How old are you? "));
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${10 + age} years old.`);
console.log(`In 20 years, you will be ${20 + age} years old.`);
console.log(`In 30 years, you will be ${30 + age} years old.`);
console.log(`In 40 years, you will be ${40 + age} years old.`);
