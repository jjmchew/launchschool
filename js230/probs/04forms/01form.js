console.log('form validation');

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
  if (/[a-z]/i.test(input)) msgs.push('only digits 0-9 should be used');
  if (!pattern.test(input)) msgs.push('Please enter a 10 digit number with format ###-###-####');
  return msgs;
}
// #endregion

const Validations = {
  firstName: isValidName,
  lastName: isValidName,
  email: isValidEmail,
  pw: isValidPassword,
  phone: isValidPhone,
};

let errorCheck = function(name, value) {
  const el = document.querySelector(`dd.msg[data-id="${name}"]`);
  const input = document.querySelector(`dd > input[name="${name}"]`);
  const msgs = Validations[name](value);

  if (msgs.length !== 0) {
    el.textContent = msgs.join(' | ');
    input.classList.add('error');
    return true;
  } else {
    el.textContent = '';
    input.classList.remove('error');
    return false;
  }
};

let showFormError = function(show) {
  let msgDiv = document.querySelector('.errorMsg');
  if (show) msgDiv.classList.remove('hide');
  else msgDiv.classList.add('hide');
};

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
  });

  const dl = document.querySelector('form dl');
  dl.addEventListener('focusout', e => {
    if (e.target.tagName === 'INPUT') {
      const name = e.target.getAttribute('name');
      errorCheck(name, e.target.value);
    }
  });
});