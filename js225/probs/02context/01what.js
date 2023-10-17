const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
  test: this,
};

console.log(person.fullName); // Rick Sanchez ** WRONG **
console.log(person.test);

// logs NaN : outside a function, `this` is bound to the global object!!
//            inside a function, `this` depends on function invocation
// hence `{}.firstName` and `{}.lastName` will both be `undefined` and `NaN` is the result