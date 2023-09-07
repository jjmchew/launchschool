let rlSync = require('readline-sync');

function prompt(str) {
  console.log(`==> ${str}`);
};

let num1 = rlSync.question('==> Enter the first number: ');
let num2 = rlSync.question('==> Enter the second number: ');

num1 = Number(num1);
num2 = Number(num2);

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${parseInt(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);

