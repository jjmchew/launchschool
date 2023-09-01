function triangle(num) {
  let repeat = function repeat(chr, n) {
    let out = '';
    for (let i = 0; i < n; i++) {
      out += chr;
    }
    return out;
  };

  for (let i = 1; i <= num; i++) {
    console.log(`${repeat(' ', num - i)}${repeat('*', i)}`);
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
