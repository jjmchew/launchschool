function centerOf(str) {
  let length = str.length;
  let idx = Math.floor(length / 2);
  let output;
  if (length % 2 === 0) {
    output = str[idx - 1] + str[idx];
  } else {
    output = str[idx];
  }
  console.log(output);
  return output;
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"