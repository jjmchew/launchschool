const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

/*
In JS, the `===` will test whether 2 objects are the *same* object.
Based on the code given, although the object `person` and the object `otherPerson` both have a similarly named property with the same value, they are 2 distinct objects which happen to look the same.

To produce the desired output, both variables must reference the same object. This can be achieved by assigning `otherPerson` to `person`.
e.g., replace line 2 with `const otherPerson = person;`
*/
