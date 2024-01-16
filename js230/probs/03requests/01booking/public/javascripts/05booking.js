import { getStaffData } from './04addSchedules.js';

export let getSchedules = function() {
  return new Promise((res, rej) => {
    let request = new XMLHttpRequest();
    request.open('get', '/api/schedules');
    request.responseType = 'json';

    request.addEventListener('load', ()=> {
      if (request.status < 300) res(request.response);
      else rej('Error retrieving schedules. Please try again.');
    });

    request.send();
  });
};

export default function ex5() {
  console.log('Exercise 5 - Booking Time Slots');

  // #region helper functions
  let removeSelect = () => {
    let dd = document.querySelector('#scheduleSelect-dd');
    dd.lastElementChild.remove();
  };

  let insertP = () => {
    let dd = document.querySelector('#scheduleSelect-dd');
    dd.lastElementChild.remove();
    let p = document.createElement('p');
    p.textContent = 'Refreshing available bookings';
    dd.insertBefore(p, null);
  };

  let populateSelect = function(promises) {
    // #region Populate scheduleSelect options using API responses for staff and schedules
    Promise.all(promises)
      .then(resultsArray => {
        let [ staffData, scheduleData ] = resultsArray;

        let dd = document.querySelector('#scheduleSelect-dd');
        removeSelect();
        let select = document.createElement('select');
        select.setAttribute('name', 'scheduleSelect');
        select.setAttribute('id', 'scheduleSelect');
  
        scheduleData.forEach(obj => {
          if (obj.student_email === null) {
            let option = document.createElement('option');
            option.setAttribute('value', obj.id);
            option.textContent = `${getStaffNameFromId(staffData, obj.staff_id)} | ${obj.date} | ${obj.time}`;
            select.appendChild(option);
          }
        });
        dd.insertBefore(select, null);
      })
      .catch(err => console.log(err));
      // #endregion
  };

  let getStaffNameFromId = (data, id) => {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].id === id) return data[i].name;
    }
    return null;
  };

  let postSchedule = (id, email) => {
    return new Promise((res, rej) => {
      let request = new XMLHttpRequest();
      request.open(bookingForm.method, bookingForm.action);
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

      let json = JSON.stringify({
        id: id,
        student_email: email,
      });

      request.addEventListener('load', () => {
        console.log('submit response', request.status, request.response);
        if (request.status < 300) res(request.response);
        if (request.status === 404) rej(request.response);
      });

      request.send(json);
    });
  };

  let getSequence = responseText => {
    return responseText.match(/\d+$/)[0];
  };

  let processNewStudent = (sequence, email) => {
    let nsEmail = document.querySelector('#ns-email');
    nsEmail.value = email;

    let nsSequence = document.querySelector('#ns-sequence');
    nsSequence.value = sequence;

    let fieldset = document.querySelector('#newStudentDetails');
    fieldset.classList.remove('ex5hide');
    fieldset.style.display = 'block';
  };

  let postNewStudent = () => {
    return new Promise((res, rej) => {
      let request = new XMLHttpRequest();
      request.open(newStudentForm.method, newStudentForm.action);
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

      let json = JSON.stringify({
        email: newStudentForm[`ns-email`].value,
        name: newStudentForm[`ns-name`].value, 
        booking_sequence: newStudentForm[`ns-sequence`].value,
      });

      request.addEventListener('load', ()=> {
        console.log('postNewStudent response', request.status, request.response);
        if (request.status < 300) res(request.response);
        if (request.status >= 400) rej(request.response);
      });

      request.send(json);
    })
  };

  let formsReset = () => {
    bookingForm.reset();
    newStudentForm.reset();
    newStudentForm.classList.add('ex5hide');
    document.querySelector('#newStudentDetails').style.display = 'none';
    insertP();
    populateSelect([ getStaffData(), getSchedules() ]);
  };
  // #endregion

  let getStaffDataPromise = getStaffData();
  let getSchedulesPromise = getSchedules();

  let promises = [getStaffDataPromise, getSchedulesPromise];

  document.addEventListener('DOMContentLoaded', () => {

    populateSelect(promises);

    // #region bookingForm (schedule) submit event
    let bookingForm = document.querySelector('#bookingForm');
    bookingForm.addEventListener('submit', event => {
      event.preventDefault();

      let email = bookingForm[`scheduleEmail`].value;
      postSchedule(bookingForm[`scheduleSelect`].value, email)
        .then( _ => {
          console.log('Booking successfully added.');
          formsReset();
        },
        rej => {
          // display new student form with prepopulated fields
          let sequence = getSequence(rej);
          processNewStudent(sequence, email);
        });
    });
    // #endregion

    // #region newStudentForm submit event
    let newStudentForm = document.querySelector('#newStudentForm');
    newStudentForm.addEventListener('submit', event => {
      event.preventDefault();

      console.log('newStudentForm click');
      
      postNewStudent()
        .then(res => {
          console.log(res);
          postSchedule(bookingForm[`scheduleSelect`].value, bookingForm[`scheduleEmail`].value)
            .then( _ => {
              console.log('Booking successfully added.');
              formsReset();
            },
            rej => console.log(rej));
        })
        .catch(rej => console.log(rej));
    });
    // #endregion
  });
}