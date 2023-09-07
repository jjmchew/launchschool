function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}
/*
The expected result will not be produced. This code will always return NaN since the `total` function will always return undefined.
The `total` function needs to assign the initial value of `sum` to `0`. By default, a declared variable will be assigned a value of `undefined`. Hence, `sum` will always evaluate to `NaN` (`undefined` + any number will return `NaN`).
Also, the `total` function does not have an explicit return statement, so will always return `undefined`.
Thus, the `productOfSums` function will always return `NaN` since `undefined * undefined` will return `NaN`.
*/
