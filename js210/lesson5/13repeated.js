function repeatedCharacters(str) {
  let chars = str.toLowerCase().split('');
  let tally = {};
  chars.forEach(char => {
    if (tally[char]) tally[char] += 1;
    else tally[char] = 1;
  });
  Object.keys(tally).forEach(key => {
    if (tally[key] < 2) delete tally[key];
  });
  console.log(tally);
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
