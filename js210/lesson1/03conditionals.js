// Questions 1 - 9
let apples = 3;
// let bananas = 5;
let bananas = 1;
if (apples === bananas) {
  console.log('strictly equal');
} else {
  if (apples == bananas) {
    console.log('same, different types');
  } else {
    console.log('not strictly equal');
  }
}

let areEqual = apples === bananas;
console.log(areEqual);

let eitherOr = apples || bananas;
console.log(eitherOr);
let eitherOr2 = bananas || apples;
console.log(eitherOr2);
// 3 : using `===` the strict equality operator requires that both operands also be the same type (no implicit coercion occurs)
//   : hence, 3 is not the same as '3' and the expression does not evaluate as true.

// Question 10
let lastName = 'Chewy';
let familyMessage = lastName === 'Chew' ? "You're part of the family!" : "You're not family.";

console.log(familyMessage);
