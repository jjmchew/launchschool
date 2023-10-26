let Account = function () {
    let userEmail;
    let userPw;
    let userFirstName;
    let userLastName;

    function invalidMsg() {
      return 'Invalid Password';
    }
    function generateRandom(length) {
      const CHARS = 'abcdefghijklmnopqrstuvwxyz';
      let output = '';
      while (output.length < length) {
        output += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      return output;
    }

    return {
      init(email, pw, firstName, lastName) {
        userEmail = email;
        userPw = pw;
        userFirstName = firstName;
        userLastName = lastName;
        this.displayName = generateRandom(16);
        return this; // this line is crucial apparently
      },
      isInvalidPw(pw) {
        return pw !== userPw;
      },
      reanonymize(pw) {
        if (this.isInvalidPw(pw)) return invalidMsg();
    
        this.displayName = generateRandom(16);
        return true;
      },
      resetPassword(oldPw, newPw) {
        if (this.isInvalidPw(oldPw)) return invalidMsg();
    
        userPw = newPw;
        return true;
      },
      firstName(pw) {
        if (this.isInvalidPw(pw)) return invalidMsg();
        return userFirstName;
      },
      lastName(pw) {
        if (this.isInvalidPw(pw)) return invalidMsg();
        return userLastName;
      },
      email(pw) {
        if (this.isInvalidPw(pw)) return invalidMsg();
        return userEmail;
      },
      displayName() {
        return this.displayName;
      },
    }
};

// test code provided
let fooBar = Object.create(Account()).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

console.log(' ======== ');

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         //  (returns true)
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account()).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(bazQux.firstName('abc'));              // logs 'Invalid Password'
console.log(bazQux.email('abc'));                  // logs 'Invalid Password'

console.log(' ======== ');

console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.firstName('123456'));           // should log 'Invalid Password'
console.log(bazQux.firstName('123456'));           // should log 'baz'

