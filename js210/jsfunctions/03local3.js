var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
This is local

Although the globally-scoped variable `myVar` is declared and initialized to the string 'This is global', it is re-assigned by the function `someFunction`.
When `someFunction` is invoked, it accesses the globally-scoped `myVar` and re-assigns it to the string 'This is local'.
When `console.log` is invoked on the last line, that is the string that is output to the screen.
*/
