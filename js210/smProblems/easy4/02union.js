function union(array1, array2) {
  let newArray = [];
  copyNonDups(newArray, array1);
  copyNonDups(newArray, array2);
  console.log(newArray);
  return newArray;
}

function copyNonDups(newArray, array) {
  array.forEach(element => {
    if (newArray.indexOf(element) === -1) newArray.push(element);
  });
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
