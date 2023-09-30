/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution.
It uses a series of Caesar Ciphers based on the letters of a keyword.
Each letter of the keyword is treated as a shift value.
For instance, the letter 'B' corresponds to a shift value of 1,
and the letter 'd' corresponds to a shift value of 3.
In other words, the shift value used for a letter is equal to its index value in the alphabet.
This means that the letters 'a'-'z' are equivalent to the numbers 0-25.
The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying
the current shift value to a Caesar Cipher for that particular character.
To make this more concrete, let's look at the following example:

Copy Code
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
Notice that in the example, the key isn't moved forward if the character isn't in the alphabet.
Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher.
The case of the keyword doesn't matter — in other words,
the resulting encryption won't change depending on the
case of the keyword's letters (e.g., 'MEat' === 'mEaT').
*/

/*
Elapsed: 32 mins


input
- string : plaintext : string of alpha and non-alpha characters to be encoded
- string : keyword : used to decide the 'shift' value for each letter of plaintext

output
- encoded message

rules
- each letter of plaintext will correspond to a letter of keyword (assuming keyword repeats as much as necessary)
- the 'index' of each keyword letters determines how to caesar shift each corresponding plaintext letter
- non-alpha and punctuation is unchanged
- case is unchanged
- spaces must remain in the encoded message as per input message
- assume spaces in keyword imply no shift of letter
- assume only letters or spaces in keyword

data structure
- use string for reference alphabet
- iterate through plaintext by convert to array of chars

approach
- intialize reference alphabet string 'ALPHABET'
- declare'letterCounter' to track which char of keyword will be matched next
- declare 'encoded' as empty string to collect output
- iterate through each character of plaintext using index
  - if upper/lower case (helper function)
       - take shifted letter (helper function), add to 'encoded'
       - increment letterCounter
  - else just add character to 'encoded'
- return 'encoded'

notes
- need to correlate plaintext letter with appropriate keyword letter
  - could use (counter % keyword.length) where counter increments for every alphabetic char
- write 'shift' as helper function
- could use replace with a shift function?  might be hard to correlate keyword letter

*/

console.log(vignere("Pine", 'meat') === 'Bmnx');
console.log(vignere("P ine", 'meat') === 'B mnx');
console.log(vignere("Pine", 'm at') === 'Binx');
console.log(vignere("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");

// Re-written to be awesome
function vignere(plaintext, keyword) {
  let makeEncrypter = () => {
    let ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    let counter = 0;
    
    return shift = char => {
      let key = ALPHABET.indexOf(keyword[counter % keyword.length]);
      if (key < 0) key = 0;
      counter += 1;
      let newIdx = (ALPHABET.indexOf(char.toLowerCase()) + key) % ALPHABET.length;
      return /[a-z]/.test(char) ? ALPHABET[newIdx] : ALPHABET[newIdx].toUpperCase();
    };
  }
  let encoded = plaintext.replace(/[a-z]/ig, makeEncrypter());
  console.log(encoded);
  return encoded;
}

// Re-factored to improve understanding and streamline
// function vignere(plaintext, keyword) {
//   let testChar = char => {
//     if (/[a-z]/.test(char)) return 'lower';
//     else if (/[A-Z]/.test(char)) return 'upper';
//     else return 'other';
//   };
//   let shift = (char, key) => {
//     let newIndex = (ALPHABET.indexOf(char.toLowerCase()) + key) % ALPHABET.length;
//     return testChar(char) === 'upper' ? ALPHABET[newIndex].toUpperCase() : ALPHABET[newIndex];
//   };
//   let getKey = () => {
//     let key = letterCounter % keyword.length;
//     if (testChar(keyword[key]) === 'other') return 0;
//     else return ALPHABET.indexOf(keyword[key].toLowerCase());
//   };
//   let ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//   let letterCounter = 0;
//   let encoded = '';

//   plaintext.split('').forEach(char => {
//     if (testChar(char) !== 'other') {
//       encoded += shift(char, getKey());
//       letterCounter += 1;
//     } else encoded += char;
//   });

//   console.log(encoded);
//   return encoded;
// }

// Version 1
// function vignere(plaintext, keyword) {
//   let testChar = char => {
//     if (/[a-z]/.test(char)) return 'lower';
//     else if (/[A-Z]/.test(char)) return 'upper';
//     else return 'other';
//   };
//   let shift = (char, key) => {
//     if (testChar(key) === 'other') return char;
//     let keyIdx = ALPHABET.indexOf(key.toLowerCase());
//     let newIndex = (ALPHABET.indexOf(char.toLowerCase()) + keyIdx) % ALPHABET.length;
//     return testChar(char) === 'upper' ? ALPHABET[newIndex].toUpperCase() : ALPHABET[newIndex];
//   }
//   let findKey = () => {
//     let key = letterCounter % keyword.length
//     return key;
//   }
//   let ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//   let letterCounter = 0;
//   let encoded = '';

//   plaintext.split('').forEach(char => {
//     if (testChar(char) !== 'other') {
//       encoded += shift(char, keyword[findKey()]);
//       letterCounter += 1;
//     } else encoded += char;
//   });

//   console.log(encoded);
//   return encoded;
// }