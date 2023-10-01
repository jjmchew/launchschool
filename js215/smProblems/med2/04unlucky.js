/*
Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

Examples:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
*/

/*
elapsed:  est 10 mins



input
- integer: year, > 1752

output
- integer: number of Friday the 13ths in that year

rules
- year is > 1752
- only gregorian calendar (assuming this conforms with 'Date' objects in JS)

data
- use Date objects to get which day of the week the 13th is

approach
- initialize a counter variable at 0
- for a given year, iterate through each month and check if the 13th is a Friday
  - iterate from 0..11
    - check if Date.prototype.getDay() is 5
- return the counter

notes
- Date.prototype.getDay()
    - Friday is `5`
- new Date(year, monthIndex, day)
    - monthIndex: 0..11
*/

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);

function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month <= 11; month += 1) {
    if ((new Date(year, month, 13)).getDay() === 5) count += 1;
  }
  return count;
}