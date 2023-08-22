var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

/*
This is local

When the function `someFunction` is invoked, the `console.log` invocation outputs to the screen the local variable `myVar` which has 'function-scope'. The declaration of a local variable with the same name as a variable in the global scope shadows (i.e, prevents) access to the global-scoped `myVar`.
*/
