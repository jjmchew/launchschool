const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

(() => {

  class Quiz {
    #questions;
    #answers;
    #templates;
    #form;
    #submit;
    #reset;

    constructor(questions, answers) {
      this.#questions = questions;
      this.#answers = answers;
    }

    init() {
      this.#form = document.querySelector('form');
      this.#submit = document.querySelector('input[type=submit]');
      this.#reset = document.querySelector('input[type=button]');

      this.#registerHelper();
      this.#templates = this.#processTemplates();
      this.#registerPartials();
      this.#addEvents();
    }

    #gradeQuiz(formData) {
      let results = {};
    
      Object.keys(this.#answers).forEach(ques => {
        let response = formData.get(ques);
    
        if (response === null) results[ques] = 'Unanswered';
        else if (response === answerKey[ques]) results[ques] = 'Correct Answer';
        else if (response !== answerKey[ques]) results[ques] = `Wrong - the answer is ${this.#answers[ques]}`
      });
    
      return results;
    }
    
    #addClass(result) {
      if (result.includes('Correct')) return 'green';
      else if (result.includes('Wrong')) return 'red';
      else if (result.includes('Unanswered')) return 'blue';
    }
    
    #displayResults(results) {
      Object.keys(results).forEach(id => {
        const fieldset = document.querySelector(`fieldset[id=question_${id}`);
        const newDiv = document.createElement('div');
    
        newDiv.classList.add(`answer`);
        newDiv.classList.add(this.#addClass(results[id]));
        newDiv.textContent = results[id];
    
        fieldset.appendChild(newDiv);
      });
    }
    
    #registerHelper() {
      Handlebars.registerHelper('name', function(options) {
        let makeId = function(str) {
          return str.toLowerCase().replace(/\s/g, '');
        };
      
        return makeId(options.fn(this));
      });
    }

    #processTemplates() {
      let templates = {};
      document.querySelectorAll("script[type='text/x-handlebars']")
        .forEach(template => {
          templates[template["id"]] = Handlebars.compile(template["innerHTML"]);
        });
      return templates;
    }
    
    #registerPartials() {
      document.querySelectorAll("script[data-type=partial]")
        .forEach(template => {
          Handlebars.registerPartial(template["id"], template["innerHTML"]);
        });
    }

    #addEvents() {
      this.#questions.forEach(ques => {
        const newEl = document.createElement('div');
        newEl.innerHTML = this.#templates['questionTemplate'](ques);
        this.#submit.insertAdjacentElement('beforebegin', newEl.firstElementChild);
      });

      this.#form.addEventListener('submit', e => {
        e.preventDefault();
        let formData = new FormData(this.#form);
        const results = this.#gradeQuiz(formData);
        this.#displayResults(results);
        this.#submit.setAttribute('disabled', true);
      });

      this.#reset.addEventListener('click', e => {
        e.preventDefault();
        this.#form.reset();
        document.querySelectorAll('.answer').forEach(element => element.remove());
        this.#submit.removeAttribute('disabled');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new Quiz(questions, answerKey).init();
  });

})();
