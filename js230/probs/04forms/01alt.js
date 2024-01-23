// This solution from Stephen Watzman - beauty

(() => {
  class FormValidate {
    #form;

    constructor(formElement) {
      this.#form = formElement;
    }

    init () {
      this.#addFormEvents();
    }

    #addFormEvents () {
      this.#form.addEventListener('focus', this.#focusInput.bind(this), true);
      this.#form.addEventListener('blur', this.#blurInput.bind(this), true);
      this.#form.addEventListener('submit', this.#checkFormErrors.bind(this));
      this.#form.addEventListener('invalid', this.#invalidField.bind(this), true);
    }

    #focusInput (event) {
      if (event.target.id === 'submit_button') {
        return;
      }
      event.target.classList.remove('no_input');
      event.target.nextElementSibling.innerHTML = ''
    }

    #blurInput (event) {
      event.target.checkValidity();
    }

    #checkFormErrors (event) {
      event.preventDefault();
      if (!event.target.checkValidity()) {
        document.querySelector('p').hidden = false;
        return;
      } 
      event.target.submit();
    }

    #invalidField (event) {
      event.target.classList.add('no_input');
      this.#addErrorMessages(event.target);
    }

    #addErrorMessages (inputElement) {
      let inputType = inputElement.id;
      let textValue = inputElement.value;
      let labelText = document.querySelector(`[for=${inputType}`).innerHTML;
      let message;

      switch (inputType) {
        case 'email':
          message = 'Please Enter a Valid Email';
          break;
        case 'password':
          if (textValue.length > 0) {
            message = 'Password must be at least 10 characters';
          }
          break;
        case 'phone':
          message = 'Invalid Phone Number Format';
          break;
      }

      if (message === undefined || textValue.length < 1) {
        message = `${labelText} is a required field`;
      }

      inputElement.nextElementSibling.innerHTML = message;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    let app = new FormValidate(document.querySelector('form'));
    app.init();
  })

})();