function reverse(string) {
  let output = string.split('').reverse().join('');
  console.log(output);
  return output;
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"