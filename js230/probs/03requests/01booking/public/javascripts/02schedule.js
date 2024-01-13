/*

Potential things to keep track of in this solution:

- setting the timer worked, but the timer needed to be cleared if the request was fulfilled within the 5 secs, otherwise, it would still display the abort message
- needed to abort the request if things took longer than 5 secs
- need to keep track of what is synchronous and what is asynchronous

- could be worth clarifying requirements - i.e., is it ALL schedules, or only OPEN schedules that are tallied?

*/

export default function ex2() {
  console.log('Exercise 2: Getting Schedules');

  function getSchedules() {
    return new Promise((res, rej) => {
      let request = new XMLHttpRequest();
      request.open('GET', '/api/schedules');
      request.responseType = 'json';

      let timer = setTimeout(()=>{
        request.abort();
        rej('Request took longer than 5 secs to fulfill. Please try again.');
      }, 5000);

      request.addEventListener('load', ()=> {
        clearTimeout(timer);
        res(request.response);
      });

      request.send();
    });
  }

  function tallySchedules(data) {
    let tally = {};
    data.forEach(obj => {
      if (obj.student_email === null) {
        let key = 'staff ' + obj.staff_id;
        if (!tally[key]) tally[key] = 0;
        tally[key] += 1;
      }
    });
    return tally;
  }

  console.log('Initiating request');

  getSchedules()
    .then(res => {
      let tally = tallySchedules(res);
      console.log(res, tally);
      if (Object.keys(tally).length === 0 ) console.log('There are currently no schedules available for booking.');
      else console.log('Schedules available for booking: ', tally);
    })
    .catch(err => console.log(err))
    .finally(() => {
      console.log('Request completed');
    })
}
