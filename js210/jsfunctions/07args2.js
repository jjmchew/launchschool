let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

/*
7

Within the function `myValue`, a local variable `a` is defined as a parameter, which is independent of the outer-scoped variable `a`.
Any re-assignment to the function-scoped variable `a` has no impact on the outer-scoped variable `a` as a result of variable shadowing.
Thus, on line 8 when `console.log` is invoked, the unchanged number value referenced by `a` is output to the screen.
*/
