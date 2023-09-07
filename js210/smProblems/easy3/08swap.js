function swap(input) {
  let words = input.split(' ');
  let output = words.map(word => {
    let chars = word.split('');
    [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
    return chars.join('');
  }).join(' ');
  console.log(output);
  return output;
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
