// Problem 1
let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.send();

// Problem 2
request.response;
// or
request.responseText;