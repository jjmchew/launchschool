function sequence(count, start) {
  let output = [];
  for (let i = 0; i < count; i += 1) {
    output.push(start * (i + 1));
  }
  console.log(output);
  return output;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []