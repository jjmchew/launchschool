// https://launchschool.com/lessons/7cd4abf4/assignments/01c3e47c

// ********* Question 1
let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors)
console.log(colors);
/*
This code outputs to the screen:
['red','green','blue','yellow']

The function `updateColors` is invoked on line 8 with the value referenced by global variable `colors` passed in as an argument.
`colors` references an array object, so a reference to that array is what is assigned to the local parameter `colors` of the `updateColors` function.
In the function `updateColors`, a mutating method `push` is called on the same array referenced by the global variable `colors` which adds `'yellow'` to the array.
Thus, when `console.log` is invoked on line 9, the value that is output to the screen is that of updated array referenced by the global variable `colors`.
*/


// ********* Question 2
// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors)
// console.log(colors);
/*
This code outputs to the screen:
['red','green','blue',undefined]

The function `updateColors` is invoked with only 1 argument provided. Thus, the local variable `colors` is assigned to the same array as referenced by the global variable `colors`, and the local variable `color` is assigned to `undefined`.
On line 5, `undefined` is added to the array which is referenced by both the global variable `colors` and the local, function-scoped `colors`.
Thus, the `console.log` invoked on line 9 outputs the updated values of the `colors` array.
*/


// ********* Question 3
// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors, color1);
// updateColors(colors, color2);
// console.log(colors);
/*
This code outputs to the screen:
['red','green','blue','purple','pink']

Each time the function `updateColors` is invoked, the (primitive string) value passed as the second argument will be added to the array referenced by the global variable `colors`.
On line 9, `updateColors` is invoked by passing a reference to the same array referenced by the global variable `colors` and the string value referenced by the global variable `color1`, which is `'purple'`.
On line 10, `updateColors` is invoked by passing a reference to the same array referenced by the global variable `colors` and the string value referenced by the global variable `color2`, which is `'pink'`.
Within the function `updateColors`, each time it is invoked, the local function-scoped variable `colors`references the same array as the global-scoped variable `colors`.
Hence, on line 11, when `console.log` is invoked, the array referenced by the globally-scoped variable `colors`, which has been mutated on each invocation of `updateColors`, is output to the screen.
*/



// ********* Question 4
// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
//   return colors;
// }

// let newColors = updateColors(colors, color1);
// updateColors(newColors, color2);
// console.log(colors);
/*
This code outputs to the screen:
['red','green','blue','purple','pink']

The function `updateColors` has been altered slightly to return the local, function-scoped variable `colors` which is defined as a parameter.
On line 10, `updateColors` is invoked with the array referenced by the global variable `colors` passed in as the first argument, and the string `'purple'` referenced by global variable `color1` passed in as the second argument.
The same array referenced by both the globally-scoped and locally-scoped `colors` is mutated by invoking `push`, which adds `'purple'` to the array. Then, a reference to that same array is returned by the function `updateColors` and assigned to a new local variable `newColors`, also on line 10.
`newColors` and `colors` both reference the same array.  Hence, on line 11, when `updateColors` is invoked again and that array is mutated by invoking `push` again and adding `'pink'`, the change is reflected by the `console.log` on line 12.
*/



// ********* Question 5  ** WRONG **
// let color = 'purple';
// let colors = ['red', 'green', 'blue'];

// function addColor(colors, color) {
//   colors.push(color);
//   return colors;
// }

// function removeColor(colors) {
//   color = colors.pop();
//   return colors;
// }

// let newColors = removeColor(colors);
// addColor(colors, color);
// console.log(newColors);
/*
This code outputs to the screen:
['red','green','purple'] ** WRONG **

On line 14, a global variable `newColors` is initialized and assigned to the same array as referenced by the global variable `colors` declared and initialized on line 2.
This occurs since the function `removeColor` returns a reference to the same array that is passed in and assigned to the function-scoped local variable `colors`.
Note that on line 10, that array is mutated and the last element is removed by invoking the `Array.prototype.pop` method.
On line 15, a new element is added to that same array by the `addColor` function since both `newColors` and `colors` reference the same array.
The `addColor` function is invoked by passing in the same (mutated) array referenced by the globally-scoped `colors` variable and the globally-scoped `color` variable which references the string `'purple'`.
On line 16, when `console.log` is invoked, the updated values of the array referenced by both `colors` and `newColors` are output to the screen.
*/



// ********* Question 6
// function capitalize() {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim() {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word);
// let exclaimedWord = exclaim(capitalizedWord);

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);
/*
This code outputs to the screen:
'hello!!!'
'Hello'
'hello!!!'

Neither the `capitalize` or `exclaim` functions are defined with any parameters - both functions reference the variable `word` declared and initialized on line 9, which has global scope.
On line 10, the variable `capitalizedWord`, with global scope, is initialized to the value returned by the `capitalize` function, which references `word`, but does not mutate or re-assign it.
Thus, `capitalizedWord` is assigned to 'Hello'.
On line 11, the variable `exclaimedWord`, also with global scope, is initialied to the value returned by the `exclaim` function, which references and then re-assigns the global variable `word`.
The `exclaim` function returns `hello!!!` which is assigned to `exclaimedWord` and in doing so, also re-assigns `word` to `hello!!!`.

*/



// ********* Question 7
// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim(word) {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word);
// let exclaimedWord = exclaim(capitalizedWord);

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);
/*
This code outputs to the screen:
'hello'
'Hello'
'Hello!!!'

In this question, the functions `capitalize` and `exclaim` are both defined with a parmeter `word` which shadows access to the global variable `word` within those functions.
Hence, both functions are no longer able to mutate the global variable `word`. `exclaim` now only re-assigns the local, function-scoped `word` variable on line 6.
*/


