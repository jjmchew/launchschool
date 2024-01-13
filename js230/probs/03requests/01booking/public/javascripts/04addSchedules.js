export default function ex4() {
  console.log('Exercise 4 - Adding Schedules loaded');

  let createFieldset = (function createFieldset() {
    let idNum = 0;

    return function() {
      idNum += 1;

      // title
      let div = document.createElement('div');
      div.classList.add('title');
      div.textContent = 'Schedule ' + String(idNum);
  
      // StaffName
      let dt1 = document.createElement('dt');
      let label1 = document.createElement('label');
      label1.setAttribute('for', 'staffName');
      label1.textContent = 'Staff Name :';
      dt1.appendChild(label1);
  
      let dd1 = document.createElement('dd');
      let select = document.createElement('select');
      select.setAttribute('name', 'staffName');
      select.setAttribute('id', 'staffName' + String(idNum));
  
      // let staffNames = getStaffNames(); //array
      let staffNames = ['staff1', 'staff2', 'staff3'];
      staffNames.forEach(name => {
        let option = document.createElement('option');
        option.setAttribute('value', name);
        option.textContent = name;
        select.appendChild(option);
        return option;
      });
      dd1.appendChild(select);
  
      let dl1 = document.createElement('dl');
      dl1.appendChild(dt1);
      dl1.appendChild(dd1);
  
      // Date
      let dt2 = document.createElement('dt');
      let label2 = document.createElement('label');
      label2.setAttribute('for', 'date');
      label2.textContent = 'Date :';
      dt2.appendChild(label2);
  
      let dd2 = document.createElement('dd');
      let input2 = document.createElement('input');
      input2.setAttribute('type', 'date');
      input2.setAttribute('id', 'date' + String(idNum));
      input2.setAttribute('name', 'date');
      dd2.appendChild(input2);
  
      let dl2 = document.createElement('dl');
      dl2.appendChild(dt2);
      dl2.appendChild(dd2);
  
      // Time
      let dt3 = document.createElement('dt');
      let label3 = document.createElement('label');
      label3.setAttribute('for', 'time');
      label3.textContent = 'Time :';
      dt3.appendChild(label3);
  
      let dd3 = document.createElement('dd');
      let input3 = document.createElement('input');
      input3.setAttribute('type', 'time');
      input3.setAttribute('id', 'time' + String(idNum));
      input3.setAttribute('name', 'time');
      dd3.appendChild(input3);
  
      let dl3 = document.createElement('dl');
      dl3.appendChild(dt3);
      dl3.appendChild(dd3);
  
      // combine
      let fieldset = document.createElement('fieldset');
      fieldset.setAttribute('id', 'schedule' + String(idNum));
      fieldset.appendChild(div);
      fieldset.appendChild(dl1);
      fieldset.appendChild(dl2);
      fieldset.appendChild(dl3);
  
      return fieldset;
    }
  })();

  document.addEventListener('DOMContentLoaded', () => {
    let ex4form = document.querySelector('#ex4 .schedule form');
    let submit = document.querySelector('#ex4submit');
    let addSchedules = document.querySelector('#addSchedules');

    ex4form.insertBefore(createFieldset(), submit);

    ex4form.addEventListener('submit', event => {
      event.preventDefault();
      console.log('submitted');
    });

    addSchedules.addEventListener('click', event => {
      event.preventDefault();
      console.log('clicked addSchedules');

      let newFieldset = createFieldset();
      ex4form.insertBefore(newFieldset, submit);
    });
  });
}