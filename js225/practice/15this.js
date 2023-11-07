// https://launchschool.com/exercises/f7659085

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); // logs NaN (undefined + undefined)
// this references the global object, for which there are no properties 'firstName' and 'lastName'
// `this` only changes for *function invocation*


