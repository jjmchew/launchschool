function isStringArray(arr: Array<unknown>) : arr is string[] { // ** to be a type predicate, must state return type `is` something
  return arr.every(element => typeof element === 'string');
}

console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(['test', 'string']));