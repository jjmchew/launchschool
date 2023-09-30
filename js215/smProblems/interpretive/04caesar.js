/*
Write a function that implements the Caesar Cipher.
The Caesar Cipher is one of the earliest and simplest ways
to encrypt plaintext so that a message can be transmitted securely.
It is a substitution cipher in which each letter in a plaintext
is substituted by the letter located a given number of positions
away in the alphabet. 

For example, if the letter 'A' is right-shifted by 3 positions,
it will be substituted with the letter 'D'.
This shift value is often referred to as the key.
The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case).
Any other character is left as is.
The substituted letters are in the same letter case as the original letter.
If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

Examples:

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

*/

/*
Elapsed:  26 mins

input
- string : containing upper / lower / punctuation
- number : 'key' : a number of letters to shift the alphabet by

output
- string : containing characters shifted by 'key'

rules
- case of letters remains the same
- punctuation (and other non-alphabetic chars) stay the same
- input string length and output string length will be the same
- assume key >= 0
- if key > 26, "wrap around"

data structure
- need a 'reference' alphabet with indexes : can use a string
- use strings for input / output - are iterable

approach
- initialize an empty 'output' string
- iterate over each letter of the input string using an index
  - if the letter is uppercase shift by key and add the shifted (uppercase) letter to 'output'
  - if the letter is lowercase shift by key and add the shifted (lowercase) letter to 'output'
  - any other character - add it directly to 'output'
- return 'output'

to shift letters (helper function)
- convert to lowercase
- look up index of given character
- add the 'key' amount to the index
  - find the remainder when divide by 26
- find the letter at the new key index
- convert to the required case

to test characters (helper function)
- use regex to test

notes
- can use 'key % 26'

*/

console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");

console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");

console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

console.log(
  caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === 
  "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
);

function caesarEncrypt(inputStr, key) {
  let charType = char => {
    if (/[A-Z]/.test(char)) return 'upper';
    else if (/[a-z]/.test(char)) return 'lower';
    else return 'other';
  };
  let shift = (char, key) => {
    let ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    let newIndex = ALPHABET.indexOf(char.toLowerCase()) + key;
    newIndex %= 26;
    return charType(char) === 'upper' ? ALPHABET[newIndex].toUpperCase() : ALPHABET[newIndex];
  };
  let output = '';
  for (let i = 0; i < inputStr.length; i += 1) {
    if (charType(inputStr[i]) !== 'other') output += shift(inputStr[i], key);
    else output += inputStr[i];
  }
  console.log(output);
  return output;
}