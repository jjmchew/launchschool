let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 5 + (5 * 7)  >  40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 10 + (5 * 7)  >  45

/*
The function `totalPayable` will use the value of the variable `startingBalance` defined in the main scope, along with the values of `item` and `quantity` which are assigned based upon the arguments passed in to `totalPayable`.
Since the values for `item` and `quantity` are passed using the constants `chicken` and `chickenQuantity` they do not change.
The value passed into each `console.log` invocation will thus vary depending on the value of `startingBalance` when `totalPayable` is invoked.

** EXTENSION **
Through the use of closures, the current value of `startingBalance` can be accessed each time the `totalPayable` function is invoked and executed.
*/

