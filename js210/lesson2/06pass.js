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
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);
/*

*/
