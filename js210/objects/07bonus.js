function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

/*
This works since every JS function has an object `arguments` which is an array-like object
that stores the arguments passed into a function. This object exists regardless of whether 
any parameters are defined for the function.
*/
