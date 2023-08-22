// Question 1
/*
let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors)
console.log(colors);
*/
/*
['red', 'green', 'blue', 'yellow']

A local variable `colors` is declared and initialized to reference an array with elements ['red', 'green', 'blue'].
This same array is then passed as an argument and assigned to the function-scoped local varaible `colors` when the `updateColors` function is invoked.
Within this function, the array is mutated by invoking the `push` method and adding the value referenced by the main-scoped local variable `color`. This local variable `color` is accessible within the function `updateColors` as it was declared within the main scope.
Thus, the final `console.log` invocation outputs the updated values of the array referenced by `colors` to the screen.
*/


// Question 2  **REVIEW**
/*
let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors)
console.log(colors);
*/
/*
['red', 'green', 'blue', undefined ]

This output is different from the above since an additional parameter `color` is defined for the function `updateColors`. Since this parameter has the same name as the main-scoped local variable `color`, it shadows access to the main-scoped `color`.
When `updateColors` is invoked, only 1 argument is passed in - the array referenced by the local variable `colours`.  Since there is no second argument, the value of the function-scoped variable `color` is `undefined`.
Thus, an `undefined` element is added (mutating) the array referenced by `colors`.
When the `console.log` is invoked, the output to the screen reflects the updated values of the array: 
['red', 'green', 'blue', undefined]
*/


// Question 3
/*
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);
*/
/*
['red', 'green', 'blue', 'purple', 'pink']

The function `updateColors` has been defined in the same way, with parameters which shadow access to the main-scoped local variables of the same name.
When `updateColors` is invoked the first time, the arguments passed in are the array referenced by the main-scoped local variable `colors`, and the string referenced by the main-scoped local variable `color1` (which is `purple`.
Within the function, the function-scoped `colors` variable references the same array as the main-scoped `colors` variable and is mutated when the `push` method is invoked. The element added to this array is the primitive string value `purple`, which was assigned to the function-scoped `color` variable.
When `updateColors` is invoked the second time, the arguments passed in are the updated (mutated) array referenced by the main-scoped `colors` and the string referenced by the mainscoped variable `color2` (which is `pink`).
Again, the array is mutated and when the final `console.log` is invoked, the output to the screen includes the updated elements of the array: ['red', 'green', 'blue', 'purple', 'pink'].
*/


// Qusetion 4
/*
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);
*/
/*
['red', 'green', 'blue', 'purple', 'pink']

Although this code is slightly different, introducing a new main-scoped local variable `newColors`, it returns the same output.
The main-scoped variable `newColors`, and the various iterations of the function-scoped variable `colors` all reference the same, mutating array originally initialized to the main-scoped variable `colors`.
*/


// Question 5
/*
let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);
*/
/*
['red', 'green', 'blue']

The main-scoped variable `newColors` is declared and initialized to the return value of the function `removeColor`, where the array referenced by the main-scoped variable `colors` is passed in as an argument.
Within function `removeColor`, the main-scoped variable `color` is re-assigned to the last value of the array - 'blue' - when the array is mutated via the `pop` method.
Thus, the array referenced by the main-scoped `colors` and the function-scoped `colors` (the same array) is not ['red', 'green']. This is the same array which is returned by `removeColor` and assigned to `newColors`.

When the function `addColor` is invoked, this updated array is passed in as an argument, along with the updated value of `color` which is 'blue'.
The function `addColor` then mutates the array, adding the string 'blue', an returns that same array.
Although the returned array from `addColor` isn't referenced, the mutated value of the array referenced by `colors` is output to the screen by the final `console.log` invocation.
*/


// Question 6
/*
function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);
*/
/*
hello!!!
Hello
hello!!!

The functions `capitalize` and `exclaim` are not declared with any parameters, hence they both reference the main-scoped variable `word`.
The function `capitalize` changes the first character of the string referenced by the main-scoped variable `word` to uppercase and returns that string. This does not mutate or change the primitive string value referenced by `word`. Thus, the variable `capitalizedWord` is declared and initialized to 'Hello'.
The function `exclaim` re-assigns the string referenced by the main-scoped variable `word` to 'hello!!!' and returns this value. Thus, the variable `exclaimedWord` is declared and initialized to the string value 'hello!!!'.
When the first `console.log` is invoked, the updated value of `word` is output to the screen: 'hello!!!'.
The second `console.log` outputs to the screen 'Hello', and the third `console.log` outputs to the screen 'hello!!!'.
*/


// Question 7
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);
/*
hello
Hello
Hello!!!

Although the code looks similar, the updated function definitions for `capitalize` and `exclaim` now include a parameter `word` which shadows access to the main-scoped variable `word`.

This does not affect the behaviour of the function `capitalize`. The function now operates on the (string) value which is passed in as an argument and assigned to the function-scoped variable `word`. In the case of this program, that is the string value assigned to the main-scoped `word`. Hence, the string value returned from `capitalize` is 'Hello' - same as before.

However, the function `exclaim` now behaves differently.
Since there is a parameter `word` defined, the function no longer operates on and re-assigns the main-scoped `word`. Instead, the function is invoked with the string value of `capitalizedWord` ('Hello') passed in, and thus returns 'Hello!!!' and makes no changes to the main-scoped `word`.

Hence, the main-scoped `word` remains unchanged, `capitalizedWord` references the string value 'Hello', and `exclaimedWord` references 'Hello!!!'. This is what is output to the screen by the 3 `console.log` invocations.
*/
