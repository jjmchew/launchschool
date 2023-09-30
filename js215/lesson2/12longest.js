let longText1 = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

let longText2 = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced.';

let getIndexes = (inputTxt, sentenceEnd) => {
  // create array of [start, end] indexes for every sentence
  let start = 0;
  let end = 1;
  let indexes = [];
  while (end < inputTxt.length) {
    if (sentenceEnd.includes(inputTxt[end]) || end === inputTxt.length - 1) {
      indexes.push([start, end]);
      start = end + 1;
      end = start + 1;
    } else {
      end += 1;
    }
  }
  return indexes;
};

let splitSentences = (indexes, text) => {
  // return an array of sentence 'objects' (to track ending punctuation)
  let sentences = indexes.reduce((sentences, idxs) => {
    return [...sentences,
      {
        endPunctuation: text[idxs[1]],
        string: text.slice(idxs[0], idxs[1]).trim(), // trim spaces after SENTENCE_END
      }
    ];
  },[]);
  return sentences;
};

function longestSentence(text) {
  const SENTENCE_END = '.!?';

  let indexes = getIndexes(text, SENTENCE_END);
  let sentences = splitSentences(indexes, text);

  let maxIndex;
  let numOfWords = sentences.map(obj => obj.string.split(/ +/))  // spaces are the only word delimiter
    .map(array => array.length)         // convert to # of words in sentence
    .reduce((max, length, index) => {   // find max length
      if (length > max) {
        maxIndex = index;
        return length;
      } else return max;
    }, 0);

  console.log(sentences[maxIndex].string + sentences[maxIndex].endPunctuation);
  console.log(); // blank line
  console.log(`The longest sentence has ${numOfWords} words.`);
  console.log(`===============`);
}

longestSentence(longText1);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

longestSentence(longText2);

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.


// ********** Personal test cases *************
let sentence1 = 'This is a short sentence. This is another short sentence! This is shortest? This could also be shortest. This is definitely the longest sentence by far!';
longestSentence(sentence1);

let sentence2 = 'This is a far& This is another\nshort\tsentence This is shortest? This could also be far. This is definitely \nthe longest sentence \nby \tfar.';
longestSentence(sentence2);

longestSentence("I!");
// I!

// The longest sentence has 1 word(s).

longestSentence("Hello there! Why  not? Goodbye.");
// Hello there! *OR* Why  not?

// The longest sentence has 2 words.

console.log(longestSentence("No punctuation"));
// 2 words or 0 words depending on rule if there's no punctuation
