console.log('groceries');

let list = [];

document.addEventListener('DOMContentLoaded', () => {

  let formEl = document.querySelector('form');

  formEl.addEventListener('submit', e => {
    e.preventDefault();
    let name = formEl.querySelector('#name').value;
    let quantity = formEl.querySelector('#quantity').value || "1";

    let newLiEl = document.createElement('li');
    newLiEl.textContent = `${quantity} ${name}`;

    let ulEl = document.querySelector('#grocery-list');
    ulEl.appendChild(newLiEl);

    let newObj = {};
    newObj[name] = Number(quantity);
    list.push(newObj);
    console.log(list);

    formEl.reset();
  });

});