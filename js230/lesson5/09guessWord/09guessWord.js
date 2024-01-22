console.log('GuessAWord');


let randomWord = (function randomWord() {
  const WORDS = ['apple', 'banana', 'orange', 'pear', 'pizza'];
  // const WORDS = [];
  let remainingWords = [...WORDS];
  
  let randIdx = function () {
    return Math.floor(Math.random() * remainingWords.length);
  };

  return function () {
    let idx = randIdx();
    let word = remainingWords[idx];
    remainingWords.splice(idx, 1);
    return word;
  };
})();

class Game {
  constructor() {
    this.allowedGuesses = 6;
    this.storedElement = {};
    this.init();
  }

  init() {
    this.storeElements();

    this.chosenWord = randomWord();
    if (!this.chosenWord) {
      this.displayMessage("Sorry, I've run out of words.");
      this.chosenWord = '';
      return;
    }
    
    this.incorrectGuesses = 0;
    this.lettersGuessed = [];
    this.drawBlanks();
    this.drawGuesses();
    this.resetDOM();
    this.bindKeys();



    this.consoleLog();
  }

  consoleLog() {
    console.log(this.chosenWord);
    console.log(this.incorrectGuesses);
    console.log(this.lettersGuessed);
    console.log(this.allowedGuesses);
  }

  storeElements() {
    this.storedElement['msg'] = document.querySelector('header div.msg');
    this.storedElement['msgP'] = document.querySelector('header div.msg p');
    this.storedElement['backdrop'] = document.querySelector('.backdrop');
    this.storedElement['footerUl'] = document.querySelector('footer dd ul');
  }

  toggleBackdrop() {
    this.storedElement['msg'].classList.toggle('hide');
    this.storedElement['backdrop'].classList.toggle('hide');
  }

  displayMessage(text) {
    let newText = document.createTextNode(text);
    this.storedElement['msgP'].appendChild(newText);
    this.toggleBackdrop();
  }

  handlebarsInfo() {
    return {
      letters: this.chosenWord.split(''),
      allowedGuesses: this.allowedGuesses,
    };
  }

  drawBlanks() {
    let wordTemplate = document.querySelector('#blankTemplate').innerHTML;
    let templateFct = Handlebars.compile(wordTemplate);
    
    let wordDOM = document.querySelector('main > dd');
    wordDOM.innerHTML = templateFct(this.handlebarsInfo());
  }

  drawGuesses() {
    Handlebars.registerHelper('iterate', function(num) {
      let html = ''
      for (let i = 0; i < num; i += 1) {
        html += '<li></li>';
      }
      return html;
    });

    let guessTemplate = document.querySelector('#guessesTemplate').innerHTML;
    let templateFct = Handlebars.compile(guessTemplate);

    let guessesDOM = document.querySelector('header > dd');
    guessesDOM.innerHTML = templateFct(this.handlebarsInfo());
  }

  drawGuessed(key) {
    let newLi = document.createElement('li');
    newLi.textContent = key;
    this.storedElement['footerUl'].appendChild(newLi);
  }

  resetDOM() {
    let a = document.querySelector('header div.msg > a');
    if (a) {
      a.removeEventListener('click', this.handleNewGame.bind(this));
      a.remove();
    }

    while(this.storedElement['footerUl'].firstElementChild) {
      this.storedElement['footerUl'].firstElementChild.remove();
    }
    while(this.storedElement['msgP'].firstChild) {
      this.storedElement['msgP'].firstChild.remove();
    }
  }

  isAllShown() {
    let elements = document.querySelectorAll('main li');

    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].className.includes('show')) return false;
    }

    return true;
  }

  correctGuess(key) {
    this.showLetter(key);
    if (this.isAllShown()) this.win();
  }

  incorrectGuess() {
    this.incorrectGuesses += 1;
    this.removeGuesses();
    if (this.incorrectGuesses === this.allowedGuesses) this.lose();
  }

  removeGuesses() {
    let headerUl = document.querySelector('header ul');
    if (headerUl.lastElementChild) headerUl.lastElementChild.remove();
  }

  bindKeys() {
    document.addEventListener('keypress', this.keypressHandler.bind(this));
  }

  unbindKeys() {
    document.removeEventListener('keypress', this.keypressHandler.bind(this));
  }

  keypressHandler(e) {
    let key = e.key.toLowerCase();
    if (!(/[a-z]/i.test(key)) || this.lettersGuessed.includes(key)) return;

    this.lettersGuessed.push(key);
    this.drawGuessed(key);
    if (this.chosenWord.includes(key)) this.correctGuess(key);
    else this.incorrectGuess.bind(this)();
  }

  showLetter(key) {
    let elements = document.querySelectorAll('main li');
    elements.forEach(element => {
      if (element.textContent === key) element.classList.add('show');
    });
  }

  handleNewGame(e) {
    e.preventDefault();
    this.resetDOM();
    this.init.bind(this)();
    this.toggleBackdrop();
  }

  showPlayAnother() {
    let a = document.createElement('a');
    a.textContent = 'Play another';
    a.addEventListener('click', this.handleNewGame.bind(this));
    this.storedElement['msg'].appendChild(a);
  }

  win() {
    this.displayMessage('You guessed the word!');
    this.showPlayAnother();
  }

  lose() {
    this.displayMessage("You're out of guesses!");
    this.showPlayAnother();
  }
}


document.addEventListener('DOMContentLoaded', () => {
  new Game();
});

