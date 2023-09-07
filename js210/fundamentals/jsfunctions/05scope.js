function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

/*
*** WRONG ***
A ReferenceError will be raised.

A local variable `myVar` with scope limited to the function `someFunction` is declared and initialized within `someFunction`.
However, this local variable is not accessible within the outer, main scope where `console.log` is invoked. Hence, a ReferenceError will be raised.
*** WRONG ***


Within the function `someFunction` a variable `myVar` is declared and initialized without using either `var` or `let`. As a result, JavaScript creates a new variable on the global object called `myVar`.  Hence, when `console.log` is invoked in the global scope, `myVar` is available and 'This is global' is output to the screen.
*/
