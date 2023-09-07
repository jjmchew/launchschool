let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

/*
7

The function `myValue` defines a parameter `b` which is assigned the value of the argument passed in when the function is invoked.
When the function `myValue` is invoked on line 7, the primitive number value referenced by the variable `a` is passed as an argument and assigned to `b`.
The subsequent re-assignment of `b` on line 4 does not affect the outer-scoped variable `a` at all.
Thus, when `console.log` is invoked on line 8, the unchanged number value of `a` is output to the screen.
*/
