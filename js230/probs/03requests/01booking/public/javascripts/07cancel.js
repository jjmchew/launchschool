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

}

export default function ex7() {
  console.log('Exercise 7 - Cancellations');

  Promise.all([getSchedules(), getStaffData()])
    .then(results => {
      let [schedules, staff] = results;
      console.log(schedules);
      console.log(staff);

      schedules = schedules.map(obj => {
        return {
          ...obj,
          staff_email: getStaffInfo(staff, obj.staff_id, 'email'),
          staff_name: getStaffInfo(staff, obj.staff_id, 'name'),
        }
      })
    });

  // getSchedules().then(schedules => {
  //   console.log(schedules);
  //   // cancelBooking(20);
  //   // cancelSchedule(20);
  // });
}