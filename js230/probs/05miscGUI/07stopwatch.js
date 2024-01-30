console.log('stopwatch');

(() => {

  class Stopwatch {
    #counter = 0;
    #start = false;
    #interval;
    #startstopButton;
    #resetButton;
    #centiElement;
    #secElement;
    #minElement;
    #hrElement;

    init() {
      this.#startstopButton = document.querySelector('#startstop');
      this.#resetButton = document.querySelector('#reset');
      this.#centiElement = document.getElementById('centiseconds');
      this.#secElement = document.getElementById('seconds');
      this.#minElement = document.getElementById('minutes');
      this.#hrElement = document.getElementById('hours');
      this.#displayCounter();
      this.#addListeners();
    }

    #calcTime() {
      let count = this.#counter;

      const MIN_PER_HR = 60;
      const SEC_PER_MIN = 60;
      const CENTISEC_PER_SEC = 100;

      const hours = Math.trunc(count / (CENTISEC_PER_SEC * SEC_PER_MIN * MIN_PER_HR));
      count -= hours * (CENTISEC_PER_SEC * SEC_PER_MIN * MIN_PER_HR);
      const mins = Math.trunc(count / (CENTISEC_PER_SEC * SEC_PER_MIN));
      count -= mins * (CENTISEC_PER_SEC * SEC_PER_MIN);
      const secs = Math.trunc(count / CENTISEC_PER_SEC);
      count -= secs * CENTISEC_PER_SEC;
      const centiseconds = count;

      return [centiseconds, secs, mins, hours];
    }

    #displayCounter() {
      const NUM_DIGITS = 2;
      const [ centiseconds, seconds, minutes, hours ] = this.#calcTime();

      this.#centiElement.textContent = String(centiseconds).padStart(NUM_DIGITS, '0');
      this.#secElement.textContent = String(seconds).padStart(NUM_DIGITS, '0');;
      this.#minElement.textContent = String(minutes).padStart(NUM_DIGITS, '0');;
      this.#hrElement.textContent = String(hours).padStart(NUM_DIGITS, '0');;
    }

    #toggleStartstop(opt = this.#start) {
      if (opt) {
        this.#startstopButton.setAttribute('value', 'Start');
        clearInterval(this.#interval);
        this.#start = false;
      } else {
        this.#startstopButton.setAttribute('value', 'Stop');
        this.#interval = setInterval(this.#incrementCounter.bind(this), 10);
        this.#start = true;
        this.#counter = 0;
      }
    }

    #incrementCounter() {
      this.#counter += 1;
      this.#displayCounter();
    }

    #addListeners() {
      this.#startstopButton.addEventListener('click', e => {
        this.#toggleStartstop();
      });

      this.#resetButton.addEventListener('click', e => {
        this.#counter = 0;
        this.#toggleStartstop(true);
        this.#displayCounter();
      })
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new Stopwatch().init();
  });

})();