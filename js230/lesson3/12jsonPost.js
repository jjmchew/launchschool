// Problem 1
let request = new XMLHttpRequest();
request.open('POST', 'https://lsjs230-book-catalog.herokuapp.com/books');

request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
let json = JSON.stringify(data);

request.send(json);


// POST /books HTTP/1.1
// Host: lsjs230-book-catalog.herokuap.com
// Content-Length: 59
// Content-Type: application/json; charset=utf-8
// Accept: */*
// 
// {"title":"Eloquent JavaScript","author":"Marijn Haverbeke"}



// Problem 2
let request2 = new XMLHttpRequest();
request2.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request2.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request2.setRequestHeader('Authorization', 'token AUTH_TOKEN');
let data2 = {
  name: 'New Product',
  sku: 'newprod',
  price: '1000',
};
let json2 = JSON.stringify(data2);
request2.send(json2);