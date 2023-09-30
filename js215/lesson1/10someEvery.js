function myOwnEvery(array, func) {
  let output = array.reduce((acc, value)=>acc && func(value));
  console.log(output);
  return output;
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true




function areAllNumbers(array) {
  let output = myOwnEvery(array, isANumber);
  console.log(output);
  return output;
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

areAllNumbers([1, 5, 6, 7, '1']);             // false
areAllNumbers([1, 5, 6, 7, 1]);               // true
areAllNumbers([1, 5, 6, 7, NaN]);             // false