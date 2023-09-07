function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

/*
The `randomGreeting` function does not return the expected string greeting from the `words` constant declared within the function. An explicit `return` statement is required.
Also, `greeting` is assigned to the function `randomGreeting`, but should instead be assigned to the return value when `randomGreeting` is invoked. This can be acccomplished by adding `()` after the function name.
*/
