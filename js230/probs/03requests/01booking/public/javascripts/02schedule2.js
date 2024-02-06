// js230 problems > making http requests
// Problem 2 - Getting Schedules

export default function ex2 () {
  console.log('ex2 - v2');

  function getSchedules() {
    return new Promise((res, rej) => {
      let request = new XMLHttpRequest();
      request.open('GET', '/api/schedules');
      request.responseType = 'json';
      request.timeout = 5000;
      request.send();
  
      request.addEventListener('load', e => {
        console.log('ex2', request.response);
        res(request.response);
      });

      request.addEventListener('timeout', e => {
        request.abort();
        rej(new Error('network timeout'));
      });
    });
  }

  async function tallySchedules(data) {
    return new Promise(res => res(data.filter(obj => obj.student_email === null)));
  }

  getSchedules()
  .then(tallySchedules)
  .then(data => {
    if (data.length === 0) console.log('No schedules available for booking.');
    else console.log(data);
  })
  .catch(err => console.error('an error occurred:  ', err.message))
  .finally(() => console.log('Operation complete'));
}