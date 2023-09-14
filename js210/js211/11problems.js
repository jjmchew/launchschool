'use strict';

function outer() {
  ringo = 'drummer';
  console.log('original');
  return inner();
}


let inner = function () {
  console.log(ringo); // outputs drummer; return undefined
}

let ret = outer(); // undefined
console.log(ret); // undefined

// What is logged to console? What is stored in outer?
// original
// drummer