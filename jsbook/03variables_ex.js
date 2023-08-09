// Queestion 1
let name = 'Victor';
console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`);

// Question 2
let age = 20;
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${10 + age} years old.`);
console.log(`In 20 years, you will be ${20 + age} years old.`);
console.log(`In 30 years, you will be ${30 + age} years old.`);
console.log(`In 40 years, you will be ${40 + age} years old.`);

// Question 3
{
  let foo = 'bar';
}
// console.log(foo);
// The code returns an error - 'foo' is block-scoped and not available in main scope where console.log is invoked

// Question 4
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
// There will be an error when 'NAME' is re-assigned.  Since it is a constant, it cannot be re-assigned.

// Question 5
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
// The code logs 'bar' to the console.  The block-scoped 'foo' is a different variable.

// Question 6
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
// No error - constants have the same scoping as variables.

