/*
https://launchschool.com/lessons/28467827/assignments/cec18cce

Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

Example
thirdMax([3, 2, 1]); // 1

*/

/*
elapsed:  26 mins



input
- array 'nums' : array of integers

output
- integer : 3rd largest integer of array 'nums'

rules
- cannot sort 'nums'
- if there is no 3rd largest element, return the max (largest number)

questions
- no argument given?  return error
- not an array?  return error
- empty array? return undefined
- if all the same?  return largest
- if not integers?  (e.g., strings, etc) ignore
- if negative integers?  treat as any other integer
- sparse array?  ignore empty
- not sort - not run `sort` function?  but can find the largest elements in order?  assume yes
- any infinity?  how to address?  like any other number (will be filtered out - not an Integer)

***QUESTIONS I MISSED***
- more than 1 argument?
- any number of elements?  e.g., VERY large numbers of elements?
- could ask about 0 explicitly
- could ask more explicitly about the same numbers - i.e., just group them like I did, or treat as separate numbers


notes
- using forEach, etc. will ignore empty
- could filter arr initially to remove the non-integer elements
  - can use Number.isInteger(num) to check
- can use reduce to find the max
  - save the max in an array of 'maxes'
- can then filter max out of 'workingArr'


approach
- check for invalid input (non-array argument)
- create 'workingArr' by filtering 'arr' to remove non-integer elements
- create an empty array 'maxes' to store each successive max value
- define a 'findMax' helper function
  - use reduce to find the max and return that value
  - return undefined if there is no 'max'
- iterate through 'workingArr' 3 times
  - findMax, push to 'maxes' if not undefined
  - remove max from 'workingArr'
- if maxes.length === 3, return index 2 element
- if not, return 0th element

*/

function thirdMax(arr) {
  if (!Array.isArray(arr)) throw Error ('invalid input given');

  let findMax = () => {
    let max = workingArr.reduce((max, num) => {
      if (num > max) return num;
      else return max;
    }, -Infinity);
    if (max === -Infinity) return undefined;
    else return max;
  };

  let workingArr = arr.filter(element => Number.isInteger(element));
  
  let maxes = [];
  for (let i = 0; i < 3; i += 1) {
    let max = findMax();
    if (max !== undefined) maxes.push(max);
    workingArr = workingArr.filter(element => element !== max);
  }
  return maxes.length === 3 ? maxes[2] : maxes[0];
}

console.log(thirdMax([3, 2, 1]) === 1);
console.log(thirdMax([]) === undefined);
console.log(thirdMax([-3, 2, -1, -5, -10]) === -3);
console.log(thirdMax([2, 1]) === 2);
console.log(thirdMax([2, 2, 2, 2]) === 2);
console.log(thirdMax([2, 'a', , 2]) === 2);
console.log(thirdMax([3, 'a', 1, , 2]) === 1);
console.log(thirdMax([3, 'a', 1, , 2.3]) === 3);
// console.log(thirdMax()); // throw error
// console.log(thirdMax('hello')); // throw error
// console.log(thirdMax({a: 1})); // throw error

let sparse = [1, 2, 3];
sparse.length = 5;
console.log(thirdMax(sparse) === 1);
