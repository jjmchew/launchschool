function halvsies(array) {
  let bStart = Math.ceil(array.length / 2);
  let bEnd = array.length;
  let output = [array.slice(0, bStart), array.slice(bStart, bEnd)];
  console.log(output);
  return output;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
