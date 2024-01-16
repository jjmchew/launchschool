/*
fieldsets for forms take the HTML structure:

        <!-- <fieldset id="schedule1">
          <div class="title">Schedule 1</div>
          <dl>
            <dt><label for="staffName">Staff Name :</label></dt>
            <dd>
              <select name="staffName" id="staffName1">
                <option value="staff1">staff1</option>
                <option value="staff2">staff2</option>
              </select>
            </dd>
          </dl>
          <dl>
            <dt><label for="date">Date :</label></dt>
            <dd><input type="date" id="date1" name="date"></dd>
          </dl>
          <dl>
            <dt><label for="time">Time :</label></dt>
            <dd><input type="time" id="time1" name="time"></dd>
          </dl>
        </fieldset>
        <fieldset id="schedule2">
          <div class="title">Schedule 2</div>
          <dl>
            <dt><label for="staffName">Staff Name :</label></dt>
            <dd>
              <select name="staffName" id="staffName2">
                <option value="staff1">staff1</option>
                <option value="staff2">staff2</option>
              </select>
            </dd>
          </dl>
          <dl>
            <dt><label>Date :</label></dt>
            <dd><input type="date" id="date2" name="date"></dd>
          </dl>
          <dl>
            <dt><label>Time :</label></dt>
            <dd><input type="time" id="time2" name="time"></dd>
          </dl>
        </fieldset> -->

*/
export let getStaffData = function() {
  return new Promise((res, rej) => {
    let request = new XMLHttpRequest();
    request.open('get', '/api/staff_members');
    request.responseType = 'json';

    request.addEventListener('load', () => {
      if (request.status < 300) res(request.response);
      else rej("Something's gone wrong.  Please try reloading the page.");
    });

    request.send();
  });
};

export default function ex4() {
  console.log('Exercise 4 - Adding Schedules loaded');

  let staffDataPromise = getStaffData();
  let createFieldset;

  staffDataPromise
    .then(data => {
      createFieldset = (function createFieldset(staffData) {
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

          staffData.forEach(obj => {
            let option = document.createElement('option');
            option.setAttribute('value', obj.id);
            option.textContent = obj.name;
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
      })(data);
    })
    .catch(err => alert(err));

  document.addEventListener('DOMContentLoaded', () => {
    let ex4form = document.querySelector('#ex4 .schedule form');
    let submit = document.querySelector('#ex4submit');
    let addSchedules = document.querySelector('#addSchedules');

    staffDataPromise.then( _ => {
      ex4form.insertBefore(createFieldset(), submit);
    })

    addSchedules.addEventListener('click', event => {
      event.preventDefault();

      staffDataPromise.then( _ =>{
        let newFieldset = createFieldset();
        ex4form.insertBefore(newFieldset, submit);
      });
    });

    ex4form.addEventListener('submit', event => {
      event.preventDefault();

      let request = new XMLHttpRequest();
      request.open('POST', '/api/schedules');
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

      let fieldsets = ex4form.querySelectorAll('fieldset');
      let scheduleData = [];
      fieldsets.forEach(node => {
        scheduleData.push({
          staff_id: node.querySelector('select').value,
          date: node.querySelector('input[name="date"]').value,
          time: node.querySelector('input[name="time"]').value,
        });
      });
      console.log(scheduleData);

      request.addEventListener('load', () =>{
        if (request.status <= 299) {
          console.log(request.response);
          ex4form.reset();
        } else {
          console.log('Something went wrong. Please try again.');
          console.log(request.response);
        }
      });

      // Note specific request body format
      request.send(JSON.stringify({
        schedules: scheduleData,
      }));
    });

  });
}