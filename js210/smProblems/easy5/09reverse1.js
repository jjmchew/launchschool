function reverseSentence(str) {
  let output = str.split(' ').reverse().join(' ');
  console.log(output);
  return output;
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"