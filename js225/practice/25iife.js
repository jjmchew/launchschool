// create some code which is entirely encapsulated and which creates variables and does something with them

// #region unencapsulated code
let sum = (a, b) => a + b;
console.log(sum(3, 4));
console.log(sum(5, 6));
console.log(sum(7, 8));
// #endregion

( function newScope(outsideFunc) {
    function sum (a, b) {
      return 'inside sum: ' + a + b;
    }
    console.log(sum(3, 4));
    console.log(sum(5, 6));
    console.log(sum(7, 8));
    console.log(outsideFunc(2, 4));
  }
)(sum);

// note function `sum` using function declaration would be hoisted so a simple block `{}`
// would not be sufficient to create a new scope
