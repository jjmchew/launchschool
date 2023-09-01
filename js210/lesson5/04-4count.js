function wordCount(str) {
  let words = str.split(' ');
  let tally = {};
  words.forEach(word => {
    if (tally[word]) tally[word] += 1;
    else tally[word] = 1;
  });
  return tally;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
