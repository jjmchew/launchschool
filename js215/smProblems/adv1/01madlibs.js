/*
Build a madlibs program that takes a text template as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text template. Choose the right way to structure your template and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll be defining.

Examples:

Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them in.

function madlibs(template) {
  // ...
}

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
*/

/*
elapsed:  45 mins


input
- a 'template' : a string with required replacements indicated by:
                 ==VERB==, ==ADJECTIVE==, ==NOUN==, ==ADVERB==

output
- a string with random words filled in, according to a reference object with list of words

rules
- words to be filled in are pulled form reference words randomly
- each reference word can only be used once
- replaced words are not otherwise identifiable in output string

data
- use an object for reference words, key is type, values are arrays of possible words
- regex can be constructed from keys in ref words obj

approach
- iterate through each word type in the reference object
  - use regex to match and replace each type of word
    - once replaced, a word is removed from the reference object list

notes
- Math.random() * (max - min) + min  (max exclusive, min inclusive)

*/
'use strict';

let words = {
  adjective: "quick lazy sleepy noisy hungry pained slow enormous tiny".split(' '),
  noun: "fox dog head leg tail cat rabbit cow pizza car book".split(' '),
  verb: "jumps lifts bites licks pats eats runs whacks".split(' '),
  adverb: "easily lazily noisily excitedly sloppily peacefully crazily".split(' '),
};

let template2 = "The ==NOUN== ==VERB== the ==NOUN=='s ==NOUN==.";
madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

let template1 = "The ==ADJECTIVE== brown ==NOUN== ==ADVERB== ==VERB== the ==ADJECTIVE== yellow ==NOUN==, who ==ADVERB== ==VERB== his ==NOUN== and looks around.";
madlibs(template1);


// Replace function improved
function madlibs(template) {
  let getRandomWord = match => {
    match = match.replace(/[^a-z]/gi, '').toLowerCase();
    let idx = Math.floor(Math.random() * (words[match].length));
    return words[match][idx];
  };

  template = template.replace(/==(\w+)==/g, getRandomWord);
  console.log(template);
}



// Version 1
// function madlibs(template) {
//   let getRandomWord = type => {
//     let idx = Math.floor(Math.random() * (words[type].length));
//     return words[type][idx];
//   };

//   let regex = type => new RegExp(`==${type.toUpperCase()}==`, 'g');
//   Object.keys(words).forEach(type => {
//     template = template.replace(regex(type), ()=>getRandomWord(type));
//   });
//   console.log(template);
// }