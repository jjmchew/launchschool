var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
This is global

The `myVar` declared and initialized within the function `someFunction` has only function-scope and shadows access to the global `myVar` variable.
*/
