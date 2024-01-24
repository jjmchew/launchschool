
(()=> {
  console.log('serialize 4');

  // #region validation functions
  let isValidEmail = function(input) {
    let msgs = [];
    let pattern = new RegExp('[a-z][0-9a-z]*@[a-z][0-9a-z]*\.[a-z]{2,3}$', 'i');
    if (/\s/.test(input)) msgs.push('no spaces in email');
    if (!pattern.test(input)) {
      msgs.push(`Your email doesn't seem to be valid (e.g., email@gmail.com)`);
    }
    return msgs;
  };
  
  let isValidName = function(input) {
    let msgs = [];
    if (input.trim() === '') msgs.push('A name is required');
    if (/\d+/.test(input)) msgs.push('No numbers are allowed');
    return msgs;
  };
  
  let isValidPassword = function(input) {
    let msgs = [];
    if (input.trim().length < 10) msgs.push('Password must be at least 10 characters');
    return msgs;
  };
  
  let isValidPhone = function(input) {
    let msgs = [];
    let pattern = new RegExp('[1-9][0-9]{2}(-|\.)?[1-9][0-9]{2}(-|\.)?[0-9]{4}');
    if (input === '') return msgs;
    if (input.length > 12) msgs.push('Please enter a 10 digit number');
    if (/[a-z]/i.test(input)) msgs.push('only digits 0-9 should be used');
    if (!pattern.test(input)) msgs.push('Please enter a 10 digit number with format ###-###-####');
    return msgs;
  }

  let isValidCC = function(input) {
    let msgs = [];
    if (input.length < 4) msgs.push('Please enter a complete credit card number');
    return msgs;
  };
  // #endregion
  
  const Validations = {
    firstName: isValidName,
    lastName: isValidName,
    email: isValidEmail,
    pw: isValidPassword,
    phone: isValidPhone,
    cc: isValidCC,
  };
  
  let addError = function(name, msgs) {
    const add = msgs.length === 0 ? false : true;

    const el = document.querySelector(`dd.msg[data-id="${name}"]`);
    if (add) el.textContent = msgs.join(' | ');
    else el.textContent = '';

    if (name === 'cc') {
      const inputs = document.querySelectorAll(`dd > input[name="${name}"]`);
      inputs.forEach(input => {
        if (add) input.classList.add('error');
        else input.classList.remove('error');
      });
    } else {
      const input = document.querySelector(`dd > input[name="${name}"]`);
      if (add) input.classList.add('error');
      else input.classList.remove('error');
    }

    return add;
  };

  let errorCheck = function(name, value) {
    const msgs = Validations[name](value);
    return addError(name, msgs)
  };
  
  let showFormError = function(show) {
    let msgDiv = document.querySelector('.errorMsg');
    if (show) msgDiv.classList.remove('hide');
    else msgDiv.classList.add('hide');
  };

  let serializeData = function(formData) {
    let submitData = new URLSearchParams([...formData]);
    let digits = submitData.getAll('cc').join('');
    submitData.set('cc', digits);
    console.log(submitData.toString());
    return submitData.toString();
  };

  // DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {


    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      let data = new FormData(form);
      let show = false;
      for (const pair of data.entries()) {
        if (errorCheck(...pair)) show = show || true;
      }
  
      showFormError(show);

      if (!show) serializeData(data);
    });


    const dl = document.querySelector('form dl');
    dl.addEventListener('focusout', e => {
      if (e.target.tagName === 'INPUT') {
        const name = e.target.getAttribute('name');
        errorCheck(name, e.target.value);
      }
    });


    [
      document.querySelector('#firstName'),
      document.querySelector('#lastName'),
    ].forEach(element => {
      element.addEventListener('keypress', e => {
      if (e.key >= '0' && e.key <= '9') e.preventDefault();
      });
    });


    [
      document.querySelector('#phone'),
    ].forEach(element => {
      element.addEventListener('keydown', e => {
        if (String(e.code).includes('Key')) e.preventDefault();
      });
    });


    let inputs = document.querySelectorAll('form dl input[name="cc"]');
    inputs.forEach((input, idx) => {
      input.addEventListener('keydown', e => {
        const AllowedKeys = [
          'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'End', 'Home', 'Tab',
        ];
        if (String(e.code).includes('Key')) e.preventDefault();
        if (!AllowedKeys.includes(String(e.code)) && !String(e.code).includes('Digit')) e.preventDefault();
      });

      input.addEventListener('keyup', e => {
        if ([0, 1, 2].includes(idx)) {
          if (e.code.includes('Digit') && e.target.value.length === 4) {
            inputs[idx + 1].focus();
          }
        }
        if ([1, 2, 3].includes(idx)) {
          if (e.code.includes('Backspace') && e.target.value.length === 0) {
            inputs[idx - 1].focus();
          }
        }
      });
    });

  }); // DOMContentLoaded

})();
