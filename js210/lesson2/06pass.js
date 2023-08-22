// Question 1
/*
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);
*/
/*
Hello
Hello

When the function `changeMyWord` is invoked, the string primitive `Hello` is passed in as an argument and assigned to the parameter `word` of the function.
Within the function `changeMyWord`, the `console.log` invocation outputs 'Hello' to the screen.
The subsequent re-assignment of the local, function-scoped variable `word` to an uppercase string does not impact the variable `myWord` in the main scope.
Hence, when `myWord` is passed into the invocation of the last `console.log`, `Hello` is output to the screen.
*/


// Question 2
/*
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);
*/
/*
Hello
HELLO

When the function `changeMyWord` is invoked, the primitive string 'Hello' referenced by the variable `myWord` is passed in as an argument and assigned to the local, function-scoped variable `word`.
Within this function, `Hello` is output to the screen by the initial console.log invocation. Then `word` is re-assigned to uppercase characters and returned by the function.
This uppercase string 'HELLO' is then re-assigned to the global-scoped variable `myWord`, which is what is output to the screen by the last `console.log` invocation.
*/


// Question 3
/*
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);
*/
/*
Hello
Hello // from the changeMyWord function
HELLO

The local variable `myWord` is initialized and assigned to the string value 'Hello'.
This string value 'Hello' is passed as an argument to the function `changeMyWord` and assigned to a local variable `word` that is scoped only to this function.
Within the function `changeMyWord`, the local variable `word` is re-assigned to capitalized version through invocation of the `toUpperCase` method which is called on the string `Hello`.
Thus, the string value returned from `changeMyWord` is `HELLO`.
This string `HELLO` is the value assigned to the local variable `myOtherWord` assigned and initialized on the 8th line of the program.
*/


// Question 4
/*
function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);
*/
/*
[ 'Hello', 'Goodbye' ]
[ 'Hi', 'Goodbye' ]

The local variable `myWords` is initialied and assigned to an array with elements ['Hello', 'Goodbye'].
This array (object) is then passed in as an argument when invoking the `changeMyWords` function.
The same array elements are then output to the screen when the `console.log` is invoked within the function.
Both the local variable `myWords` within the main scope and the local variable `words` within the function `changeMyWords` reference the same array object.
The subsequent line re-assigns the first element of the referenced array object to 'Hi', mutating the array.
This re-assignment, changes the values of the array which are output to the screen by the last `console.log` invokation of the program, which outputs 'Hi', 'Goodbye' to the screen.
*/


// Question 5
function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);
/*
[ 'Hello', 'Goodbye' ]
[ 'Hello', 'Goodbye' ]

The local variable `myWords` is initialized and assigned to an array with elements ['Hello', 'Goodbye'].
This array is then passed in as an argument to the invocation of the `changeMyWords` function, which assigns the same array object to the function-scoped local variable `words`.
The `console.log` invocation outputs ['Hello', 'Goodbye'] to the screen.
Then, the local variable `words` is re-assigned to a new array with different elements. This re-assignment does not affect the local variable `myWords` in the main scope.
Back to the main scope, the console.log invocation outputs to the screen the (unchanged) values of `myWords`: ['Hello', 'Goodbye'].
*/

