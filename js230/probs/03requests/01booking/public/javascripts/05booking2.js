// https://launchschool.com/exercise_sets/e0015dad
// js230 problems > Making HTTP requests
// Problem 5 - Booking Time Slots

export default function ex5 () {
  console.log('ex5 - v2');

  class Booking {
    #staffData;

    init() {
      console.log('new booking');
      Promise.all([
        this.#getRequest('/api/schedules'),
        this.#getRequest('/api/staff_members'),
      ])
      .then(values => {
        let [schedules, staffData] = values;
        this.#staffData = staffData;

        this.#parseSchedules(schedules)
          .then(this.#makeOptions)
          .then(this.#displaySelect)
          .then(data => console.log(data));

        console.log('staff data', staffData);
      });
    }

    #staffName(id) {
      return this.#staffData.find(obj => obj.id === id).name;
    }

    #getRequest(url) {
      return new Promise((res, rej) => {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'json';
        request.send();
    
        request.addEventListener('load', () => {
          res(request.response);
        });
      });
    }

    #parseSchedules(data) {
      return new Promise(res => {
        let result = data.filter(obj => obj.student_email === null)
                         .map(obj => {
                          return { ...obj,
                                    staff_name: this.#staffName(obj.staff_id)
                                 }
                         });
        res(result);
      });
    }

    #makeOptions(data) {
      let options = data.map(obj => {
        return `${obj.staff_name} | ${obj.date} | ${obj.time}`;
      });
      return options;
    }

    #displaySelect(data) {
      console.log('display Select', data);
      data.push('another');
      return data;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new Booking().init();
  });
}