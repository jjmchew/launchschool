// Problem 1
let a = [1];

function add(b) {
  a = a.concat(b); // [1] is reassigned here and no longer required
}

function run() {
  let c = [2];
  let d = add(c);
} // [2] is no longer required after `run`

run();
// [1, 2] is no longer needed after program, but needs to be available in `a` (global scope)



// ** WRONG **  must think about individual values that are created / mutated through the program
// [1] and [2] must remain until after execution of `run` (required in `add`)
// [1, 2] is created when `add` is executed and assigned to `d` but never used
// thus everything can be GC after `run` completes


// Problem 2
function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);
// array ["Steve", "Edie"] cannot be GC until after program runs, since closure in returned function continues to reference array elements
