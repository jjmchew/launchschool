var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

/*
This is global

A variable `myVar` with global scope is declared and initialized to the string 'This is global'.
That same variable is accessible within the function `someFunction`.
When `console.log` is invoked within `someFunction`, 'This is global' is output to the screen.
*/
