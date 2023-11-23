// bubble sort
/*
- check each pair of elements and swap if needed
*/

function bubbleSort(inputArray) {
  let out = inputArray.slice();

  for (let i = 0; i < inputArray.length - 1; i += 1) {
    let swapped = false;

    for (let j = 0; j < inputArray.length - 1 - i; j += 1) {
      if (out[j] > out[j + 1]) {
        [ out[j], out[j + 1] ] = [ out[j + 1], out[j] ];
        swapped = true;
      }
      // console.log(i, j, out);
    }

    if (!swapped) break;
  }
  return out;
}

console.log(bubbleSort([3, 2, 4, 1]));
console.log('========');
console.log(bubbleSort([5, 3, 8, 7, 2]));
