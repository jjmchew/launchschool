/*
https://www.codewars.com/kata/523f5d21c841566fde000009/javascript

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

/*
input
- 2 arrays 'a' and 'b'

output
- 1 array 'a' with all elements in 'b' removed

rules
- remove multiple occurences of 'b' in 'a'

notes
- can iterate through 'b'
  - iterate until indexOf is -1
    - indexOf search for element, then splice that index from 'a'
- return 'a'


*/

function arrayDiff(a, b) {
  b.forEach(element => {
    let index;
    while (index !== -1) {
      index = a.indexOf(element);
      if (index !== -1) a.splice(index, 1);
    }
  });
  return a;
}


console.log(arrayDiff([1,2],[1]).toString() === [2].toString());
console.log(arrayDiff([1,2,2,2,3],[2]).toString() === [1,3].toString());
