/*
create a method that takes a positive integer number and returns the next bigger number formed by the same digits:
e.g., 12 => 21
513 => 531
2017 => 2071
If no bigger number can be composed using those digits, return -1
e.g., 9 => -1
111 => -1
531 => -1

p next_bigger_num(9) == -1
p next_bigger_num(12) == 21
p next_bigger_num(513) == 531
p next_bigger_num(2017) == 2071
p next_bigger_num(111) == -1
p next_bigger_num(531) == -1
p next_bigger_num(123456789) == 123456798

*/

/*
input
- a number : positive integer

output
- a number : next bigger number formed by rearranging all of the digits
          OR
            -1 (no bigger number can be found)

rules
- all digits must be used

notes
- convert number to string, split to get digits
- could create all possible combinations of digits combine into numbers and then sort to find largest
- creating all possible combos?
  - could be challenging for numbers with many digits
- could apply rules
  - only 1 digit - return -1
  - if in existing # all digits are already sorted in descending order, -1
- could just look at the last 2 digits
  - if last digit is > 2nd last digit, swap
  - else look at last 3 digits:
    - move the next largest digit in front
      - when this happens, need to put lowest digits in order next (to make next LOWEST number)
      - could do all possible combos and then CHOOSE next largest from ordered array
  - with 4 last digits
    - e.g., 4531 > 5134

approach
- helper fct : arraysEqual : check each element in turn to see if they are equal
  - check for equal length
  - iterate through each element, check if it's equal to the same element in the other array

- if 1 digit, return -1
- convert number to array of digits (in order) 'inputArr'
- iterate 'digits' starting with 2 
  - 'getDigits(2)' : look at last 2 digits (while 'digits' is <= inputArr.length)
  - if digits are arranged in descending order then increment 'digits'
  - if not, re-arrange digits
    - take the next largest digit, move to the front, then arrange the remaining digits from smallest to largest

- recombine digits into a string, convert to number, return it
*/
function next_bigger_num(num) {
  if (num < 10) return -1;

  let arraysEqual = (array1, array2) => {
    if (array1.length !== array2.length) return false;

    for (i = 0; i < array1.length; i += 1) {
      if (array1[i] !== array2[i]) return false;
    }

    return true;
  };
  let descending = (a, b) => b - a;
  let ascending = (a, b) => a - b;
  let isMin = array => arraysEqual(array, array.slice().sort(descending));
  let rearrangeDigits = (check) => {
    let ref = check.slice().sort(descending);
    let rearranged = [];
    let newIndex = ref.indexOf(check[0]) - 1;
    rearranged.push(ref[newIndex]);
    ref.splice(newIndex, 1);

    rearranged = rearranged.concat(ref.sort(ascending));
    return parseInt([...inputArr.slice(0, inputArr.length - lastDigits), ...rearranged].join(''), 10);
  };
  let inputArr = num.toString().split('').map(str => parseInt(str, 10));

  if (isMin(inputArr)) return -1;

  let lastDigits = 2;
  let output = num;
  while (lastDigits <= inputArr.length && output <= num) {
    let check = inputArr.slice().slice(inputArr.length - lastDigits);
    if (isMin(check)) {
      lastDigits += 1;
      output = -1;
    } else output = rearrangeDigits(check);
  }

  console.log(output);
  return output;
}
console.log(next_bigger_num(9) === -1);
console.log(next_bigger_num(12) === 21);
console.log(next_bigger_num(513) === 531);
console.log(next_bigger_num(351) === 513);
console.log(next_bigger_num(2017) === 2071);
console.log(next_bigger_num(111) === -1);
console.log(next_bigger_num(531) === -1);
console.log(next_bigger_num(123456789) === 123456798);
console.log(next_bigger_num(123456798) === 123456879);
console.log(next_bigger_num(123456879) === 123456897);
console.log(next_bigger_num(123456978) === 123456987);
console.log(next_bigger_num(123459876) === 123465789);