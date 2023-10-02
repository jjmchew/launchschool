/*
We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers. When only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.

Check our code below. Why do the example invocations fail with an error saying Maximum call stack size exceeded? Can you fix the code, so it runs without error and satisfies the requirements?

*/

function make_range(start, end) { // updated
  console.log(start, end);
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(...args) {   // range is re-declared and just calls itself repeatedly
  if (args[1] === undefined) return make_range(0, args[0]);
  else return make_range(...args);
}

// Examples

console.log(range(10, 20));
console.log(range(5));