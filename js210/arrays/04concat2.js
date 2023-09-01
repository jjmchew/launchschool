function concat(array1,...args) {
  let newArr = array1.slice();

  args.forEach(arg => {
    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; i++) {
        newArr[newArr.length] = arg[i];
      }
    } else {
      newArr[newArr.length] = arg;
    }
  });

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
