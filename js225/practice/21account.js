// https://launchschool.com/exercises/6abaca87

let Account = (function MakeAccount() {
  let accounts = {};

  let isInvalidPw = (displayName, pw) => pw !== accounts[displayName].password;
  let invalidMsg = 'Invalid Password';
  let getDisplayName = () => {
    let CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let DISPLAY_NAME_LENGTH = 16;
    let displayName;
    do {
      displayName = '';
      for (let i = 0; i < DISPLAY_NAME_LENGTH; i += 1) {
        let index = Math.floor(Math.random() * CHARACTERS.length);
        displayName += CHARACTERS[index];
      }
    } while (Object.keys(accounts).includes(displayName));
    return displayName;
  };
  return {
    init(email, password, firstName, lastName) {
      this.displayName = getDisplayName();

      accounts[this.displayName] = { email, password, firstName, lastName };
      return this;
    },
    reanonymize(pw) {
      if (isInvalidPw(this.displayName, pw)) return invalidMsg;
      let oldDisplayName = this.displayName;
      this.displayName = getDisplayName();
      accounts[this.displayName] =accounts[oldDisplayName];
      return true;
    },
    resetPassword(oldPw, newPw) {
      if (isInvalidPw(this.displayName, oldPw)) return invalidMsg;
      accounts[this.displayName].password = newPw;
      return true;
    },
    firstName(pw) {
      if (isInvalidPw(this.displayName, pw)) return invalidMsg;
      return accounts[this.displayName].firstName;
    },
    lastName(pw) {
      if (isInvalidPw(this.displayName, pw)) return invalidMsg;
      return accounts[this.displayName].lastName;
    },
    email(pw) {
      if (isInvalidPw(this.displayName, pw)) return invalidMsg;
      return accounts[this.displayName].email;
    },
    displayName() {
      return this.displayName;
    },
  };
})();

console.log(Account);

// #region provided test code
let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // should return 'foo'
console.log(fooBar.email('abc'));                  // should return 'foo@bar.com'
// #endregion

console.log(bazQux.firstName('abc'));              // should return 'Invalid Password'
console.log(bazQux.email('123456'));               // should return 'baz@qux.com'
console.log(bazQux.displayName);