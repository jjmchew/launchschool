/*
https://launchschool.com/exercises/1e63f70b

A Pythagorean triplet is a set of three natural numbers, {a, b, c}, for which, a**2 + b**2 = c**2.

For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

*/

/*
elapsed:  62 mins


input
1) a set of 3 numbers ("natural numbers", integers greater than 0)
2) a maximum number (also a natural number)

output
1) true / false : indicating if numbers are pythagorean triplets
2) an array of arrays containing all primitive pythagorean triplets

rules
- a, b, c are pythagorean triplets if a**2 + b**2 = c**2
  - a, b, c are different numbers
- primitive triplets are those that have no common multiples
  e.g., [6, 8, 10] is a multiple of [3, 4, 5]
- the maximum number represents the largest number that may be in a given triplet

approach (test triplets)
- combine numbers in an array
- sort the array in ascending order
- where a, b are the 2 smallest numbers, check formula against 3rd number

approach (finding common multiples 'reduceNums')

// - check basic divisor rules for numbers:
//   - all even > divisible by 2
//   - digits add to a multiple of 3 > divisible by 3
//   - R digit is 0 or 5 > divisible by 5
- sort numbers in ascending order
- iteratively test every possible integer divisor against all 3 numbers from 2 up to the smallest number
  - if a divisor exists, divide all numbers by that divisor
  - check again
- return the least common multiple of the triplet

test [20, 12, 16]
sort: [12, 16, 20]
iterate i from 2 to 12
        2  :  divisible  : [6, 8, 10]
    reset max = 6, i = 2
        2  :  divisible  : [3, 4, 5]
    reset max = 3, i = 2
        2  : no
        3  : no
    return [3, 4, 5]



approach (generating triplets)
- create empty array 'triplets'
- determine pairs of (a, b) to generate c
    - start with a = 3, b = 4 (smallest triplet)
    - need check if c is an integer
    - increment a until c > max
        - increment b (for every a) until c is > max

- check if all numbers (a, b, c) are: (helper function 'processTriplet')
    - less than max
    - reduced
    - already exists in collection
      - need to check array.toString() since can't compare objects using `===`
  - if so, add the triplet to 'triplets'


notes
- need to be able to test if a set are pythagorean triplets
- need to be able to find common multiples given 3 numbers

*/

// console.log(isPythagorean(3, 4, 5) === true); 
// console.log(isPythagorean(5, 3, 4) === true); 
// console.log(isPythagorean(5, 6, 7) === false); 
// console.log(isPythagorean(6, 7, 5) === false); 

function isPythagorean(...triplet) {
  let nums = triplet.slice().sort((a, b) => a - b);
  let [ a, b, c ] = nums;
  return a**2 + b**2 === c**2;
}

// console.log(reduceNums(6, 10, 8).toString() === [3, 4, 5].toString());
// console.log(reduceNums(15, 12, 9).toString() === [3, 4, 5].toString());
// console.log(reduceNums(12, 7, 15).toString() === [7, 12, 15].toString());
// console.log(reduceNums(20, 12, 16).toString() === [3, 4, 5].toString());
// console.log(reduceNums(20, 25, 15).toString() === [3, 4, 5].toString());
// console.log(reduceNums(19, 5, 11).toString() === [5, 11, 19].toString());

function reduceNums(...triplet) {
  let nums = triplet.slice().sort((a, b) => a - b);
  let max = nums[0];
  for (let i = 2; i <= max; i += 1){
    if (nums.every(num => num % i === 0)) {
      nums = nums.map(num => num / i);
      max = nums[0];
      i = 1;
    }
  }
  return nums;
}

console.log(getTriplets(100).length === 16);
console.log(getTriplets(300).length === 47);

function getTriplets(maxNumber) {
  let triplets = [];
  let isExisting = (triplet) => {
    for (i = 0; i < triplets.length; i += 1) {
      if (triplet.toString() === triplets[i].toString()) return true;
    }
    return false;
  };
  let processTriplet = (...triplet) => {
    triplet = reduceNums(...triplet);
    if (!triplet.every(num => num <= maxNumber)) return;
    if (isExisting(triplet)) return;
    triplets.push(triplet);
  }

  for (let a = 3; a <= maxNumber; a += 1) {
    let c;
    for (let b = 4; b <= maxNumber; b += 1) {
      c = Math.sqrt(a**2 + b**2);
      if (Number.isInteger(c)) {
        processTriplet(a, b, c);
      }
      if (c > maxNumber) {
        c = 0;
        break;
      }
    }
    if (c > maxNumber) break;
  }
  console.log(triplets);
  return triplets;
}