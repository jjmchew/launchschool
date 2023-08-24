const rlSync = require('readline-sync');

let password = 'password';

function login () {
  for (let i = 0; i < 3; i++) {
    let pw = rlSync.question('What is the password: ');
    if (pw === password) {
      return 'You have successfully logged in';
    }
  }
  return 'You have been denied access.'
}

console.log(login());
