function doubleConsonants(str) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
  let output = '';
  for (let i = 0; i < str.length; i += 1) {
    if (CONSONANTS.indexOf(str[i].toLowerCase()) !== -1) output += str[i] + str[i];
    else output += str[i];
  }
  console.log(output);
  return output;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
