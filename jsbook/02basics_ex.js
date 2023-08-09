// Question 1
let fullName = 'James' + ' Chew';
console.log(fullName);

// Question 2
const num = 4936;

let digit1 = Math.trunc(num / 1000);
let digit2 = Math.trunc( ( num - (digit1 * 1000) ) / 100 );
let digit3 = Math.trunc( ( num - (digit1 * 1000) - (digit2 * 100) ) / 10 );
let digit4 = Math.trunc( ( num - (digit1 * 1000) - (digit2 * 100) - (digit3 * 10) ) );

console.log(digit1, digit2, digit3, digit4);

// Question 3
/*
'true' > string
false > boolean
1.5 > number
2 > number
undefined > undefined
{ foo: 'bar' } > object
*/

// Question 4
console.log('5' + 10);
// This expression logs '510' since the first operand is '5' - a string.
// The second operand gets implicitly coerced into a string '10' and then concatenated to the string '5'
// Thus, '5' + '10' results in '510'.

// Question 5
console.log(Number('5') + 10);

// Question 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Question 7
// Accessing an array element with an index that is greater than the existing elements will not result in an error; it will return `undefined`.

// Question 8
names = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin',
];
console.log(names);

// Question 9
pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};

// Question 10
console.log('foo' === 'Foo') // returns false

// Question 11
console.log(parseInt('3.1415')) // returns 3

// Question 12
console.log('12' < '9') // returns true
