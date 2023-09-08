function sequence(num) {
  let output = [];
  for (let i = 1; i <= num; i +=1 ) {
    output.push(i);
  }
  console.log(output);
  return output;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]