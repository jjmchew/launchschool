function wordSizes(input) {
  let tally = {};
  input.split(' ').forEach(word => {
    if (tally[word.length]) tally[word.length] += 1;
    else tally[word.length] = 1;
  });
  console.log(tally);
  return tally;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
