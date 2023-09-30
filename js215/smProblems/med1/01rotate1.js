/*
Write a function that rotates an array by moving the first element
to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
*/

/*
elapsed:  7 mins

input
- array of elements

output
- another array, with elements shifted to L 
    - index reduced by 1, except for the first element - goes to end

rules
- do not mutate original array
- if input is not an array, return `undefined`
- if input is empty, output is empty
- if only 1 element, it doesn't move

data
- work with arrays (as given)

approach
- create a (shallow) copy of the input array
- remove the first element (and assign it to a variable)
  - use shift
- push that first element to the end of the copy
- return the copy

*/

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                    // [1, 2, 3, 4]

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) return;
  if (inputArray.length === 0) return [];

  let copy = inputArray.slice();
  let first = copy.shift();
  copy.push(first);
  console.log(copy);
  return copy;
}