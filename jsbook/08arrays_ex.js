// Question 1
let array1 = [1, 2, undefined, 4]; // length: 4; undefined is a 'value'

let array2 = [1];
array2.length = 5; // length 5

let array3 = [];
array3[-1] = [1]; // length 0; non-standards keys are not included in length

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // length 3

let array5 = [];
array5[100] = 3; // length 101

// Question 2
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
myArray.forEach(num => {
  if (num % 2 === 0) console.log(num);
});

// Question 3
let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray2.forEach(ary => {
  ary.forEach(num => {
    if (num % 2 === 0) console.log(num);
  })
});

// Question 4
let newAry = myArray.map(num => {
  if (num % 2 === 0) { return 'even'; }
  else { return 'odd'; }
});

console.log(newAry);

// Question 5
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 
function findIntegers(things) {
  return things.filter(e => Number.isInteger(e));
};

// Question 6
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/*
function oddLengths(arr) {
  return arr.filter( e => e.length % 2 !== 0 ).map( e => e.length );
};
*/

// Question 7
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(array) {
  return array.reduce( (acc, e) => acc + (e * e));
};

// Question 8
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.reduce( (acc, value) => {
    if (value.length % 2 === 0) {
      return [...acc];
    } else {
      return [...acc, value.length];
    }
  },[]);
};

// Question 9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkArray(array) {
  let result = false;
  array.forEach(element => {
    if (element === 3) {
      result = true;
    };
  });
  return result;
};

console.log(checkArray(numbers1));
console.log(checkArray(numbers2));
console.log(checkArray(numbers3));

// Question 10
let arr3 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arr3[1][3] = 606;
console.log(arr3);
