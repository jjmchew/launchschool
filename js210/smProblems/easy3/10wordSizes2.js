function wordSizes(input) {
  let cleanInput = input.replaceAll(/[^a-z ]/gi, '');
  let tally = {};
  cleanInput.split(' ').map(word => {
    if (word.length !== 0) {
      tally[word.length] = tally[word.length] || 0;
      tally[word.length] += 1;
    }
  });
  console.log(tally);
  return tally;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}
