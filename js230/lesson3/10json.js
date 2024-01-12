// Problem 1
// cut and paste into a browser snippet to run

let request = new XMLHttpRequest();
request.open('get', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', event => {
  // console.log(event.target);  // event.target will be the XMLHttpRequest object
  let data = request.response;
  console.log(request.status);
  console.log(data.open_issues);
});

request.send();

// Problem 2
// cut and paste into a browser snippet to run
let request = new XMLHttpRequest();
request.open('get', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', event => {

  // My attempt below - didn't work
  // if (request.status !== 200) {
  //   console.log('The request could not be completed!');
  //   return;
  // }

  let data = request.response;
  console.log(request.status);
  console.log(data.open_issues);
});

// LS solution:
request.addEventListener('error', ()=>console.log('The request could not be completed.'));
request.send();

/*
since the XMLHttpRequest object has events (e.g., loadstart, load, etc.) which include `error`,
we can leverage that event (by adding an eventListener) to execute specific actions when an error occurs
*/