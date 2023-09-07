function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  let compareFn = function compareFn(a, b) {
    if (typeof a === 'string' && typeof b !== 'string') return 1;
    else if (typeof a !== 'string' && typeof b === 'string') return -1;
    else if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  };
  let sort1 = array1.sort(compareFn);
  let sort2 = array2.sort(compareFn);
  console.log(sort1, sort2);
  for (let i = 0; i < sort1.length; i++) {
    if (sort1[i] !== sort2[i]) return false;
  }
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true
