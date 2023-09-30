// Q1
let firstName = 'James';
let lastName = 'Chew';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Q2
console.log(firstName.concat(lastName));

// Q3
let array = fullName.split(' ');
console.log(array);

// Q4
let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);

// Q5
let charCode = language.charCodeAt(idx);
console.log(charCode);

// Q6
console.log(String.fromCharCode(charCode));

// Q7
console.log(language.lastIndexOf('a'));

// Q8
let a = 'a'; 
let b = 'b';
console.log(a > b, a.charCodeAt(0), b.charCodeAt(0));
b = 'B';
console.log(a > b, a.charCodeAt(0), b.charCodeAt(0));

// Q9
console.log(language.slice(1, 4));
console.log(language.slice(2, 4));

// Q10
console.log(language.substring(1, 4));
console.log(language.substring(2, 4));

// Q11
console.log(language.slice(1, -1));
console.log(language.slice(2, -1));

// Q12
console.log(language.substring(1, -1));
console.log(language.substring(2, -1));

// Q13
let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);
console.log(compoundSentence);

// Q14
console.log(fact1[0]);
console.log(fact2[0]);

// Q15
let pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));


// Q16
let boxNumber = (356).toString();
console.log(boxNumber);


// Q17
boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

// Q18
const rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');
if (name.endsWith('!')) {
  name = name.slice(0, name.length - 1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}