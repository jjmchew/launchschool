const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

// ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']
// `array2` contains separate instances of the strings that were in array1.
// The string elements in `array1` are re-assigned, and thus are different from those in `array2`.
// Since strings are immutable primitives, mutating the strings within `array1` themselves would not be possible.
