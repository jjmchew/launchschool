// Question 1
/*
let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);
*/
/*
Hello
Hello

Both variables `myWord` and `myOtherWord` reference the same primitive string 'Hello'. ** WRONG **

**Correction**
Both `myWord` and `myOtherWord` reference (different) primitive strings with value 'Hello'.
*/


// Question 2
/*
let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);
*/
/*
Goodbye
Hello

Both variables `myWord` and `myOtherWord` are initialized to the string 'Hello'.
However, `myWord` is re-assigned to the string 'Goodbye'. This re-assignment does not affect `myOtherWord`, which retains it's initialized value.
*/


// Question 3
/*
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);
*/
/*
['Hi', 'Goodbye']
['Hi', 'Goodbye']

Both variables `myWords` and `myOtherWords` reference the same array. Hence, when the first element of the array is re-assigned, the change is reflected in both variables.
*/


// Question 4
/*
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);
*/
/*
['Hi', 'Bye']
['Hello', 'Goodbye']

In this example, both variables `myWords` and `myOtherWords` both initially reference the same array.
However, the a new array is assigned to `myWords` with the values `['Hi', 'Bye'].
*/


// Question 5
/*
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);
*/
/*
['Hi', 'Goodbye']
Hello

The variable `myWord` is initialized to the primitive string 'Hello' on the second line.
On the third line, the first element of the array referenced by `myWords` is re-assigned to the primitive string 'Hi'. This action has no impact on the primitive value assigned to `myWord`.
*/


// Question 6
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);
/*
['Hi', 'Goodbye']
Hello

On the 3rd line, the first element of the array referenced by `myWords` is assigned the same primitive string value of 'Hi', as referenced by the variable `myWord`. However, this a separate memory reference.
Thus, when `myWord` is re-assigned to the primitive string 'Hello', there is no impact to the first element of the array referenced by `myWords`.
*/
