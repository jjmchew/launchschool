const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

//  return sum / array.length;
  return sum / Object.keys(array).length;
}

console.log(average(myArray));

/*
The `average` function will return `10`.
The for loop within the `average` function will iterate with indexes
-2, -1, 0, 1 since array.length is `2`.
Since the associated value for each of those object keys is `5`, the sum will be 20.
When divided by 2, the average returned will be 10.
*/
