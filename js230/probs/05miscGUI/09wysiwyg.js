console.log('wysiwyg');

(() => {

  class Editor {
    #editor;
    #buttons;

    constructor() {
      this.#registerEvents();
      this.#editor = document.querySelector('.editor');
      this.#buttons = document.querySelectorAll('button');
    }

    #registerEvents() {
      document.querySelector('nav').addEventListener('click', e => {
        let button = e.target.getAttribute('id');
        let data = null;
        if (button === 'createLink') data = this.#getURL();
        
        document.execCommand(button, false, data);
        this.#toggleButton(e.target, document.queryCommandState(button));
        
        this.#editor.focus();
      });

      ['click', 'keyup'].forEach(event => {
        document.querySelector('body').addEventListener(event, () => {
          this.#buttons.forEach(button => {
            this.#checkButton(button);
          });
        })
      });
    }

    #getURL() {
      console.log('getURL');
      return prompt('Enter URL');
    }

    #checkButton(button) {
      const id = button.getAttribute('id');
      this.#toggleButton(button, document.queryCommandState(id));
    }

    #toggleButton(target, on) {
      if (on) target.classList.add('pushed');
      else target.classList.remove('pushed');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new Editor();
  });

})();