// Problem 1
function greet(phrase, name) {
  console.log(`${phrase[0].toUpperCase() + phrase.slice(1)}, ${name}!`);
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!


// Problem 2
function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');

sayHello('Brandon');
sayHi('Sarah');
