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

function longestSentence(text) {
  if (typeof text !== 'string' || !text || !text.trim()) return console.log('No sentence(s) given!');
  
  let sentences = text.match(/\w[^.?!]*([.?!]|$)/g);

  sentences = sentences.map(sentence => {
    let words = sentence.replace(/ +[.?!]/, '').split(/ +/).length;
    return { sentence, words };
  }).sort((a, b) => b.words - a.words);

  console.log(sentences[0].sentence, '\n');
  console.log(`The longest sentence has ${sentences[0].words} words.`, '\n\n\n');
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

longestSentence("No punctuation");
// 2 words or 0 words depending on rule if there's no punctuation

longestSentence('    I yam what I yam!');
longestSentence('');
longestSentence(' ');
longestSentence(undefined);
longestSentence(123);
longestSentence('12312 1231 21 213 word kd. 2848 298  92929     2 d dfda.    \t d d d d 2 dk * ) 3 L  \n.');
longestSentence('*374( *#*$#) afkdf (3 ? 3k? dkdf d. dfkajdf 3. lkjaf? lkjadlfkjadf!     d    d     ! alkdjf dfk af dka dflkdf a adfk df? kafkaf ladf kdf >    fadfk af .  fad    . afd  f adf!');
longestSentence('k dfd kjdf 3423! kdfj dfkj k k adf 3 ((8 23 0239');

