let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

let letters = names.map(name => name[0]);
console.log(letters);

let counts = letters.reduce((counts, letter) =>{
  counts[letter] = counts[letter] || 0;
  counts[letter] += 1;
  return counts;
}, {});
console.log(counts);

let mostFrequentLetter = Object.keys(counts).reduce((finalLetter, key) => {
  if (counts[key] > counts[finalLetter]) return key;
  else return finalLetter;
});
console.log(mostFrequentLetter);
