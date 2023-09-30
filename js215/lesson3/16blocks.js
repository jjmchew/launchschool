/*
A collection of spelling blocks has two letters per block, as shown in this list:

Copy Code
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

========================

input
- string: word

output
- true or false : if the word can be written using the given blocks

rules
- each block can only be used once
- case insensitive

approach
- convert given word to all uppercase
- iterate through word character by character
- for each character
    - check if block with that character is still available
        - iterate through remaining blocks
        - check if letter is available

    - if so, remove it from the array of remaining blocks
        - get index of block with given char
        - re-assign 'blocks' to a new array without the element at that index 
    - if not, return false
- at the end, return true

*/

console.log(isBlockWord('BATCH') === true);       // true
console.log(isBlockWord('BUTCH') === false);      // false
console.log(isBlockWord('jest') === true);        // true
console.log(isBlockWord('jEsT') === true);        // true
console.log(isBlockWord('hello') === false);


function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  let checkBlocks = (char) => {
    return blocks.filter(letters => letters.includes(char)).length >= 1
  }

  let removeBlock = (char) => {
    let index = blocks.findIndex(element => element.includes(char));
    blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
  }

  let upperWord = word.toUpperCase();
  
  for (let i = 0; i < upperWord.length; i += 1) {
    if (checkBlocks(upperWord[i])) removeBlock(upperWord[i]);
    else return false;
  }

  return true;
}
