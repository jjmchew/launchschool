const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

  {
    name: 'TypeScript',
    description: 'A modification of JavaScript to provide some of the features of typed languages.',
  },
];

(() => {

  class App {
    #LESS_CHARS = 120;
    #langData;
    #main;

    constructor(langData) {
      this.#langData = langData;
      this.#main = document.querySelector('main');
    }

    init() {
      this.#displayContent();
      this.#registerListeners();
    }

    #getData(lang) {
      return this.#langData.find(obj => obj.name === lang);
    }

    #getParagraph(lang, more) {
      let text = this.#getData(lang).description;
      if (!more && text.length >= this.#LESS_CHARS) {
        text = this.#getData(lang).description.slice(0, this.#LESS_CHARS) + '...';
      }
      return text;
    }

    #createDl(langObj) {
      const dt = document.createElement('dt');
      dt.setAttribute('data-lang', langObj.name);
      dt.textContent = langObj.name;

      const dd = document.createElement('dd');
      dd.setAttribute('data-lang', langObj.name);
      dd.textContent = this.#getParagraph(langObj.name, false);

      if (langObj.description.length >= this.#LESS_CHARS) {
        const a = document.createElement('a');
        a.setAttribute('data-lang', langObj.name);
        a.textContent = 'Show More';
  
        dd.appendChild(a);
      }

      const dl = document.createElement('dl');
      dl.appendChild(dt);
      dl.appendChild(dd);

      return dl;
    }

    #displayContent() {
      this.#langData.forEach(langObj => {
        const dl = this.#createDl(langObj);
        this.#main.appendChild(dl);
      });
    }

    #processAClick(target) {
      const more = target.textContent.includes('More') ? true : false;
      const newText = more ? 'Show Less' : 'Show More';

      const lang = target.getAttribute('data-lang');
      const dd = target.parentNode;

      dd.childNodes[0].textContent = this.#getParagraph(lang, more);
      target.textContent = newText;
    }

    #registerListeners() {
      this.#main.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.tagName === 'A') this.#processAClick(e.target);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new App(languages).init();
  });

})();