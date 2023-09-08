function reverseWords(str) {
  function reverseWord(word) {
    return word.split('').reverse().join('');
  }

  let words = str.split(' ');
  let output = words.map(word => {
    if (word.length >= 5) return reverseWord(word);
    else return word;
  }).join(' ');
  console.log(output);
  return output;
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"