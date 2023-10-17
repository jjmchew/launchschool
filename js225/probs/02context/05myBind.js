function myBind(func, context, ...boundArgs) {
  return function(...args) {
    return func.apply(context, boundArgs.concat(args));
  };
}


// test case:
function greeting(salutation, num) {
  let line = salutation + ', ' + this.firstName + ' ' + this.lastName + '! ';
  let output = line;
  if (num > 1) {
    for (let i = 1; i < num; i += 1) {
      output += line;
    }
  }
  return output;
}

let person = {
  firstName: 'John',
  lastName: 'Doe',
};

let person2 = {
  firstName: 'Sally',
  lastName: 'Jane',
}
console.log(greeting.apply(person, ['Hi']));

let greetingHowdy = myBind(greeting, person2, 'Howdy');
console.log(greetingHowdy(3));