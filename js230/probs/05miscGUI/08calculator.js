console.log('calculator');

(() => {

  class Calculator {
    #buttons;
    #current;
    #entry;
    #state;
    #MAX_CHARS = 12;
    #BUTTON_DISPATCH = {
      digits: {
        buttons: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ],
        fct: this.#digitsHandler,
      },
      ops: {
        buttons: ['/', 'x', '+', '-', '%', ],
        fct: this.#opsHandler,
      },
      gen: {
        buttons: ['CE', 'C', ],
        fct: this.#genHandler,
      },
      neg: {
        buttons: ['NEG'],
        fct: this.#negHandler,
      },
      dec: {
        buttons: ['.'],
        fct: this.#decHandler,
      },
      eq: {
        buttons: ['='],
        fct: this.#eqHandler,
      },
    };
    constructor() {
      this.#buttons = document.querySelector('.buttons');
      this.#current = document.querySelector('.current');
      this.#entry = document.querySelector('.entry');
    }

    init() {
      this.#registerEvents();
      this.#resetState();
      console.log(this.#state);
    }

    #clickHandler(button) {
      let keys = Object.keys(this.#BUTTON_DISPATCH);
      for (let i = 0; i < keys.length; i += 1) {
        if (this.#BUTTON_DISPATCH[keys[i]].buttons.includes(button)) {
          this.#BUTTON_DISPATCH[keys[i]].fct.call(this, button);
          break;
        }
      }
      console.log('state: ', this.#state);
    }

    #resetState() {
      this.#state = {
        current: '0',
        previous: '',
        lastOp: '',
        total: 0,
        entry: '',
        allowNeg: false,
      };
      this.#displayCurrent();
      this.#displayEntry();
    }

    #calcTotal() {
      let num = str => Number(str);

      switch (this.#state.lastOp) {
        case 'x':
          return this.#state.total = num(this.#state.previous) * num(this.#state.current);
        case '/':
          return this.#state.total = num(this.#state.previous) / num(this.#state.current);
        case '+':
          return this.#state.total = num(this.#state.previous) + num(this.#state.current);
        case '-':
          return this.#state.total = num(this.#state.previous) - num(this.#state.current);
        case '%':
          return this.#state.total = num(this.#state.previous) % num(this.#state.current);
      }
    }

    #assignEntry(button) {
      this.#state.entry = this.#state.previous + ' ' + button;
      this.#displayEntry();
    }

    #assignPrevious(button = '') {
      this.#state.previous += this.#state.current;
      this.#state.lastOp = button;
      this.#state.total = parseInt(this.#state.previous, 10);
    }

    #displayCurrent(display = null) {
      if (display !== null) this.#current.textContent = String(display).slice(0,this.#MAX_CHARS);
      else this.#current.textContent = this.#state.current.slice(0,this.#MAX_CHARS);
    }
    #displayEntry(display = null) {
      if (display !== null) this.#entry.textContent = String(display).slice(0,this.#MAX_CHARS);
      else this.#entry.textContent = this.#state.entry.slice(0, this.#MAX_CHARS);
    }
    #digitsHandler(button) {
      if (this.#state.current.length > this.#MAX_CHARS) return;

      this.#state.allowNeg = true;

      if (this.#state.current !== '0' & this.#state.lastOp !== '=') {
        this.#state.current += button;
      } else this.#state.current = button;

      // just entering numbers after '=' "resets"
      if (this.#state.lastOp === '=') {
        this.#resetState();
        this.#state.current = button;
      }

      this.#displayCurrent();
    }

    #opsHandler(button) {
      this.#state.allowNeg = false;
      if (this.#state.lastOp !== '') {
        this.#eqHandler();
        this.#state.lastOp = button;
        this.#assignEntry(button);
        this.#displayEntry();
      } else {
        this.#assignPrevious(button);
        this.#assignEntry(button);
        this.#state.current = '0';
      }
    }

    #eqHandler() {
      this.#calcTotal();
      this.#state.lastOp = '=';

      this.#state.current = '0';
      this.#displayCurrent(this.#state.total);

      this.#state.previous = String(this.#state.total);
      this.#displayEntry('');
    }

    #genHandler(button) {
      this.#state.allowNeg = false;

      if (button === 'CE') {
        this.#state.current = '0';
        this.#displayCurrent();
      } else if (button === 'C') this.#resetState();
    }

    #toggleNeg() {
      if (!this.#state.current.includes('-')) this.#state.current = '-' + this.#state.current;
      else this.#state.current = this.#state.current.replace('-', '');
    }

    #negHandler() {
      if (!this.#state.allowNeg) return;

      if (this.#state.current === '0' && this.#state.previous !== '') {
        this.#state.current = this.#state.previous;
        this.#toggleNeg();
        this.#state.previous = this.#state.current;
        this.#displayCurrent();

        this.#state.total *= -1;
        return;
      }

      if (this.#state.current !== '0') {
        this.#toggleNeg();
        this.#displayCurrent();
      }
    }

    #decHandler() {
      if (!this.#state.current.includes('.')) this.#state.current += '.';
      this.#displayCurrent();
    }

    #registerEvents() {
      this.#buttons.addEventListener('click', e =>{
        this.#clickHandler(e.target.textContent);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new Calculator().init();
  });
})();