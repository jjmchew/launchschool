
function add(...args) {
  let first = args.shift();
  args.forEach(array => first.push(...array));
  return first;
}

function makeAdder(array2) {
  return function(array1) {
    return add(array1, array2);
  };
}

let addFive = makeAdder([5, 6, 7]);
let addTen = makeAdder([10, 11]);

console.log('addFive: ', addFive([1, 2, 3]));
console.log('addTen:  ', addTen([1, 2, 3]));

// Add code only here to change only the values output to screen below

// add = function add(array1, array2) {
//   return [...array2, ...array1];
// }

console.log('addFive again: ', addFive([1, 2, 3]));
console.log('addTen again: ', addTen([1, 2, 3]));


