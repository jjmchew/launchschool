/*
elapsed:  23 mins, with a bit of cheating to check while loop condition



input
- a collection : array of items, ordered in ascending order
- a searchTerm : an element that may be in collection

output
- integer:  index of where searchTerm is in collection
            OR
            -1 (searchTerm not found)

rules
- assume all elements in collection are the same or comparable

test
[1, 2, 3, 4], 6
start   end     mid                       compare                 
0       3       0 + mf((3-0) / 2) = 1   2 < 6 : search higher : mid + 1
2       3       2 + mf((3-2) / 2) = 2   3 < 6 : higher : mid + 1
3       3       3 + mf((3-3) / 2) = 3   4 < 6 : higher : mid + 1
4       3       start > end

[1, 2, 3, 4], 0
0       3       0 + mf((3-0) / 2) = 1   2 > 0 : lower : mid - 1
0       0       0 + mf((0) / 2) = 0     1 > 0 : lower : mid - 1
0       -1      end < start

[1, 2, 3, 4, 5], 2
0       4       0 + mf((4 - 0) / 2) = 2   3 > 2 : search lower : mid - 1
0       1       0 + mf((1 - 0) / 2) = 0   1 < 2 : search higher : mid + 1
1       1       1 + mf((1-1) / 2) = 1     2 === 2 :  return 1

approach
- define a start and end (index) as 0 and last index of collection, respectively
- iterate while (start < end)
    - find the mid (round down) index and check it's value
      - if it's value is less than searchTerm, search higher:  start becomes mid + 1
      - if it's value is greater than searchTerm, search lower: end becomes mid - 1
      - if it's value is equal to searchTerm, return the midIndex;
- return -1
*/

console.log(binarySearch([1, 2, 3, 4], 6));
console.log(binarySearch([1, 2, 3, 4], 0));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 4));

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

function binarySearch(collection, searchTerm) {
  let start = 0;
  let end = collection.length - 1;

  while(start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (collection[mid] === searchTerm) return mid;
    else if (collection[mid] < searchTerm) start = mid + 1;
    else if (collection[mid] > searchTerm) end = mid - 1;
  }
  return -1;
}