function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  }

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

/*
Within the function `placeABet`, there is a function `generateRandomInt` which has been defined as a function expression without being assigned to a variable so it is inaccessible. The `()` surrounding the function definition should be removed.
*/
