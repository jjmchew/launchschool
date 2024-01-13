/*

<form action="/api/staff_members" method="post">
  <dl>
    <dt><label for="email">Email</label></dt>
    <dd><input type="text" id="email" name="email" required></dd>
  </dl>
  <dl>
    <dt><label for="name">Name</label></dt>
    <dd><input type="text" id="name" name="name" required></dd>
  </dl>
  <input type="submit" value="Submit">
</form>
*/

export default function ex3() {
  console.log('Exercise 3: Adding Staff loaded');

  function createInput(idName) {
    let dt = document.createElement('dt');
    let label = document.createElement('label');
    let dd = document.createElement('dd');
    let input = document.createElement('input');
    
    label.setAttribute('for', idName);
    label.textContent = idName[0].toUpperCase() + idName.slice(1) + ' :';
    
    input.setAttribute('type', 'text');
    input.setAttribute('id', idName);
    input.setAttribute('name', idName);
    input.setAttribute('required', true);
    
    dt.appendChild(label);
    dd.appendChild(input);
    
    let dl = document.createElement('dl');
    dl.setAttribute('id', 'dl-'+idName);
    dl.appendChild(dt);
    dl.appendChild(dd);

    return dl;
  }

  function createForm() {
    let form = document.createElement('form');
    form.setAttribute('action', '/api/staff_members');
    form.setAttribute('method', 'post');

    let fieldset = document.createElement('fieldset');
    fieldset.appendChild(createInput('email'));
    fieldset.appendChild(createInput('name'));
    form.appendChild(fieldset);

    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    submit.setAttribute('id', 'ex3submit');
    form.appendChild(submit);

    return form;
  }

  function getEmailError(inputEmail) {
    if (inputEmail === '') return 'Must not be blank';
    if (!inputEmail.includes('@')) return 'Must include a domain';
    return null;
  }

  function getNameError(inputName) {
    if (inputName === '') return 'Must not be blank';
    if (inputName.length < 3) return 'Must be 3 or more characters';
    return null;
  }

  document.addEventListener('DOMContentLoaded', () => {
    let ex3 = document.querySelector('#ex3');
    ex3.appendChild(createForm());

    let ex3submit = document.querySelector('#ex3submit');
    let email = document.querySelector('#email');
    let name = document.querySelector('#name');
    let dlEmail = document.querySelector('#dl-email');
    let dlName = document.querySelector('#dl-name');

    let emailError = document.createElement('dd');
    emailError.classList.add('errorMsg')
    emailError.textContent = 'Please enter a proper value';
    dlEmail.appendChild(emailError);

    let nameError = emailError.cloneNode(true);
    dlName.appendChild(nameError);

    ex3submit.addEventListener('click', event => {
      event.preventDefault();

      let emailErrorMsg = getEmailError(email.value);
      if (emailErrorMsg !== null) {
        emailError.textContent = emailErrorMsg;
        emailError.classList.add('errorOn');
      } else emailError.classList.remove('errorOn');

      let nameErrorMsg = getNameError(name.value);
      if (nameErrorMsg !== null) {
        nameError.textContent = nameErrorMsg;
        nameError.classList.add('errorOn');
      } else nameError.classList.remove('errorOn');

      if (emailErrorMsg === null && nameErrorMsg === null) {
        let request = new XMLHttpRequest();
        request.open('POST', '/api/staff_members');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.responseType = 'json';
        let data = {
          name: name.value,
          email: email.value,
        };

        request.addEventListener('load', () => {
          if (request.status === 201) {
            alert(`Successfully created staff with id: ${request.response.id}`);
          } else if (request.status === 400) {
            alert(request.responseText);
          }
        });

        request.send(JSON.stringify(data));
      }
    });
  });
}