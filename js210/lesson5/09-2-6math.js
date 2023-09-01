// Question 2
let val = -180;

console.log(Math.abs(val));


// Question 3
console.log(Math.sqrt(16777216));


// Question 4
console.log(Math.pow(16, 6));


// Question 5
let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));


// Question 6
function rand(min = 0, max = 10) {
  if (min === max) return min;
  else if (min > max) [min, max] = [max, min]
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

console.log(rand(0,10));
console.log(rand(0,10));
console.log(rand(0,10));
console.log(rand(0,10));
console.log(rand(0,10));
console.log(rand(0,10));
console.log(rand(0,10));
console.log(rand(0,10));
console.log(rand(0,10));
console.log(rand(0,10));
console.log('===========');
console.log(rand(10,3));
console.log(rand(3,3));
