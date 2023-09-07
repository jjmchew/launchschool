function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

/*
This is global

When the function `someFunction` is invoked, the first line initializes an undeclared variable `myVar`.
Since this variable is undeclared, it becomes a property of the global object and is accessible from the main-scope of the program.
Thus, when console.log is invoked, 'This is global' is output to the screen.
*/
