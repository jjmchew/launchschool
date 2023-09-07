console.log(a);

var a = 1;

/*
undefined

As a result of 'hoisting' (or the initial 'creation' phase of JS code execution) the declaration of the variable `a` within the main scope will effectively occur prior to the invocation of `console.log` on line 1.
However, it is only the variable declaration that occurs - the assignment of number value `1` to the variable occurs on line 3, after the `console.log`. Hence, the output to the screen from the `console.log` is the default `undefined` for variables that are declared but not yet initialized.
*/
