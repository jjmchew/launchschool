// https://launchschool.com/lessons/0b371359/assignments/c19c9fbf

// Problem 1
let a = [1];

function add(b) {
  a = a.concat(b); // needs [1], after that can GC [1]
}

function run() {
  let c = [2]; // [2] created
  let d = add(c); // needs [1], [2];  d = [1, 2];  can GC [2]
}

run(); // can GC [1, 2]
// should remember that a = [1, 2] after `run()` - GC will depend on whether `a` is used!



// Problem 2
function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);
// ["Steve", "Edie"] is required for function `helloSteveAndEdie`
//  once that function is no longer required, can GC ["Steve", "Edie"]



// https://launchschool.com/lessons/0b371359/assignments/d5156138
/*
JS is a garbage-collected language - this means that memory does not need to be deallocated by the
developer once it is no longer required. GC will be periodically completed by the X - interpreter- X **JS runtime** on behalf
of the developer.

*/