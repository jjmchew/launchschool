function repeater(str) {
  let output = '';
  for (let i = 0; i < str.length; i += 1) {
    output += str[i] + str[i];
  }
  console.log(output);
  return output;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
