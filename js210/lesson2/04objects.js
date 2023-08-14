// Question 1
/*
let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);
*/
/*
Hello

The `concat` method does mutate the value of `myWord`.
Hence, the initialized value of `Hello` is returned by the `console.log` invocation.
*/


// Question 2
/*
let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord); // Hello
myWord.replace('H', 'J');
console.log(myWord); // Hello
myWord.split(' ');
console.log(myWord);  // Hello
*/
/*
Hello
Hello
Hello

This code returns `Hello` 3 times.
None of the string methods called on `myWord` mutate it's value.
*/


// Question 3
/*
let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);
*/
/*
Hello, Goodbye

The `push` method of an array is mutating, and thus `Goodbye` is added to the array referenced by `myWords`.
The output to the screen from the `console.log` method is `['Hello', 'Goodbye']` - the updated value of the array referenced by `myWords`.
*/


// Question 4
/*
let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);
*/
/*
Based upon MDN, the `concat` method is not mutating - a new array is returned by the method.
Hence, the values in the array referenced by `myWords` are not changed.
The console.log outputs to the screen: `['Hello']`.
*/


// Question 5
/*
let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);
*/
/*
The `console.log` will output `['Hello']` to screen.
The `toUpperCase` method invoked on the primitive string 'Hello' does not mutate it.
*/


// Question 6
let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);
/*
['HELLO']

In this example, the string value at index [0] of the array referenced by 'myWords' is re-assigned.
The new value is the uppercase version of the original string 'Hello'.
*/
