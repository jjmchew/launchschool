// Question 1
let x = '13';
let y = 9;

console.log(+(x) + y);

// Question 2
// let x = '13';
// let y = 9;

console.log(x * y);
// output will be a number - '*' coerces to numbers

// Question 3, 4
let npa = 212;
let nxx = 555;
let num = 1212;

/*
npa = npa.toString();
nxx = nxx.toString();
num = num.toString();
*/

npa = String(npa);
nxx = String(nxx);
num = String(num);

console.log(npa + nxx + num);

// Question 5
let bool = true;
let arr = [1, 2, 3];

console.log(bool.toString());
console.log(arr.toString());
