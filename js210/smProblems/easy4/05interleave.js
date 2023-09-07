function interleave(array1, array2) {
  let output = [];
  for (let i = 0; i < array1.length; i += 1) {
    output.push(array1[i]);
    output.push(array2[i]);
  }
  console.log(output);
  return output;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
