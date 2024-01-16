import { getStaffData } from './04addSchedules.js';
import { getSchedules } from './05booking.js';

function sendRequest(method, action) {
  return new Promise(res => {
    let request = new XMLHttpRequest();
    request.open(method, action);
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    request.addEventListener('load', () => {
      res(request.response);
    });

    request.send();
  })
}

export function cancelBooking(bookingId) {
  return sendRequest('put', '/api/bookings/' + bookingId, );
}

export function cancelSchedule(scheduleId) {
  return sendRequest('delete', '/api/schedules/' + scheduleId);
}

function getStaffInfo(staffData, id, field) {
  return staffData.filter(obj => obj.id === id)[0][field];
}

function getCombinedSchedule(schedules, staff) {
  let newSchedules = schedules.map(obj => {
    return {
      ...obj,
      staff_email: getStaffInfo(staff, obj.staff_id, 'email'),
      staff_name: getStaffInfo(staff, obj.staff_id, 'name'),
    };
  });

  return newSchedules;
}

function filterData(email, type, schedules) {
  let displayData;
  if (type === 'staff') {
    displayData = schedules.filter(obj => obj.staff_email === email && obj.student_email !== null);
  } else if (type === 'student') {
    displayData = schedules.filter(obj => obj.student_email === email);
  }
  return displayData;
}

function displaySchedules(displayData, type) {
  let div = document.querySelector('#ex7');

  let oldUl = div.querySelector('ul');
  if (oldUl) oldUl.remove();

  let ul = document.createElement('ul');
  displayData.forEach(obj => {
    const li = document.createElement('li');
    if (type === 'student') {
      li.textContent = `${obj.id} | ${obj.staff_name} | ${obj.staff_email} | ${obj.date} | ${obj.time}`;
    } else if (type === 'staff') {
      li.textContent = `${obj.id} | ${obj.student_email} | ${obj.date} | ${obj.time}`;
    }
    ul.appendChild(li);
  });
  div.appendChild(ul);
}

export default function ex7() {
  console.log('Exercise 7 - Cancellations');

  Promise.all([getSchedules(), getStaffData()])
  .then(results => {
    let schedules = getCombinedSchedule(...results);
    console.log(schedules);

    let ex7form = document.querySelector('#ex7form');
    ex7form.addEventListener('submit', event => {
      event.preventDefault();

      let email = ex7form[`email`].value;
      let type = ex7form[`type`].value;
      let displayData = filterData(email, type, schedules);

      console.log(displayData);
      displaySchedules(displayData, type);

      let ul = document.querySelector('#ex7 ul');
      ul.addEventListener('click', event => {
        event.preventDefault();

        let text = event.target.textContent;
        let id = Number(text.match(/^\d+/)[0]);

        console.log(text, id);
        if (type === 'student') {
          cancelBooking(id);
        } else if (type === 'staff') {
          cancelSchedule(id);
        }
      });
    })
  });

  // getSchedules().then(schedules => {
  //   console.log(schedules);
  //   // cancelBooking(20);
  //   // cancelSchedule(20);
  // });
}