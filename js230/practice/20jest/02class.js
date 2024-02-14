export default class App {
  #input;
  #form;
  #result;

  constructor() {
    this.#form = document.querySelector('form');
    this.#input = document.querySelector('form input[type="text"]');
    this.#result = document.querySelector('div.result');
    this.#addEventListeners();
  }

  #addEventListeners(){
    this.#form.addEventListener('submit', e => {
      e.preventDefault();
      console.log('submit');
      this.#handleSubmit();
    });
  }

  #handleSubmit() {
    console.log('input: ', this.#input.value);
    document.querySelector('h1').textContent = 'Changed Title';
    const p = document.createElement('p');
    p.textContent = this.#input.value;
    this.#result.appendChild(p);
  }
}

// module.exports = App;