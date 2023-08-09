// Question 1
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
// this logs [1, 4, 3] to the console since both array1 and array2 point to the same location in memory which stores pointers associated with the (same) array.  Re-assignment of the array element to a new primitive value is reflected in both array1 and array2 since they both still point to the same memory address for that element - the array is being mutated.


// Question 2
/*
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
*/
// This stack trace indicates that an error on line 4, character 15 of exercise2.js occurred:
// an uninitialized identifer 'greeting' was used.



// Question 3
console.log(Math.sqrt(37));


// Question 4
list1 = [1, 6, 3, 2]
list2 = [-1, -6, -3, -2]
list3 = [2, 2]

function findMax(array) {
  let sorted = array.sort( (a, b) => a - b );
  return sorted[sorted.length - 1];
};

console.log(findMax(list1));
console.log(findMax(list2));
console.log(findMax(list3));


// Question 5
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
// This code takes a sentence, reverses it, and stores the length of each word as an element in an array.
console.log(doSomething('This is a big sentence.'));
// This returns [9, 3, 1, 2, 4]


// Question 6
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
console.log(allMatches(words, /ra/));

function allMatches(words, pattern) {
  let matches = []
  words.forEach( word => {
    if (pattern.test(word)) {
      matches.push(word);
    }
  });
  return matches;
}


// Question 7
/*
Exception handling is writing code to execute in the event that some operation raises an exception.
An exception is an error where JavaScript will halt execution. By handling the exception, code execution can continue after an exception is raised.
This is accomplished through the use of a try / catch blocks in the code.  The 'try' block is used to execute code for which an exception may be raised, the 'catch' block is used to define code to execute in the event an exception is raised.
In some circumstances, it may make sense to define a 'finally' block which will always execute after all of the try / catch blocks execute.
*/


// Question 8
function isNotANumber(val) {
  if (val !== val) { return true; }
  return false;
}

console.log(isNotANumber(3));
console.log(isNotANumber(Number('dfa')));
console.log(isNotANumber('3'));
console.log(isNotANumber(''));
console.log(isNotANumber(false));
console.log(isNotANumber(undefined));
console.log(isNotANumber(NaN));


// Question 9
function isNegZero(val) {
  return 3 / val === -Infinity;
}

console.log('==================== Question 9 =================');
console.log(isNegZero(-0));
console.log(isNegZero(0));
console.log(isNegZero('-0'));
console.log(isNegZero(3));
console.log(isNegZero('string'));


// Question 10
let y = "5"
console.log('==================== Question 10 =================');
console.log(y++);
// this code returns '51' since it is the equivalent of y = y + 1, which will concatenate '1' if 'y' is a string.
// ** WRONG **
// The '++' operator will first coerce the value to a number - since it is the *post*-increment operator, it returns the *old* value (pre-incrementing), which is the number 5.

