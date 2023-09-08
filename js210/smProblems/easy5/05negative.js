function negative(num) {
  let output;
  if (num < 0) output = num;
  else output = num / -1;
  console.log(output);
  return output;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0