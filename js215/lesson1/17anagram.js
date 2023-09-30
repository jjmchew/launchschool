/*
  convert word to array of chars, sort array of chars - convert back to 'word'
  - compare each word in array, with this converted word
  - if equal, add word
*/

function anagram(word, list) {
  function sortLetters(word) {
    return word.split('').sort().join('');
  }
  
  let output = list.filter(listWord => sortLetters(listWord) === sortLetters(word));
  console.log(output);
  return output;
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]