/*
https://launchschool.com/exercises/663f3c6b

Ciphers are very straight-forward algorithms that allow us to render text less readable while still allowing easy deciphering. They are vulnerable to many forms of cryptoanalysis, but we are lucky that generally our little sisters are not cryptoanalysts.

The Caeser Cipher was used for some messages from Julius Caesar that were sent afield. Now Caeser knew that the cipher wasn't very good, but he had one ally in that respect: almost nobody could read well. So even being a couple letters off was sufficient so that people couldn't recognize the few words that they did know.

Caesar Cipher

Here are some examples:
@cipher = Cipher.new
@cipher.encode("iamapandabear") #=> "ldpdsdqgdehdu"
@cipher.decode("ldpdsdqgdehdu") #=> "iamapandabear"
Step 2:

Shift ciphers are no fun though when your kid sister figures it out. Try amending the code to allow us to specify a key and use that for the shift distance. This is called a substitution cipher.

Here's an example:
@cipher = Cipher.new("aaaaaaaaaaaaaaaaaa")
@cipher.encode("iamapandabear") #=> "iamapandabear"
@cipher = Cipher.new("ddddddddddddddddd")
@cipher.encode("imapandabear") #=> "lpdsdqgdehdu"
In the example above, we've set a = 0 for the key value. So when the plaintext is added to the key, we end up with the same message coming out. So "aaaa" is not an ideal key. But if we set the key to "dddd", we would get the same thing as the Caesar Cipher.

Step 3:

The weakest link in any cipher is the human being. Let's make your substitution cipher a little more fault tolerant by providing a source of randomness and ensuring that they key is not composed of numbers or capital letters.

If someone doesn't submit a key at all, generate a truly random key of at least 100 characters in length, accessible via Cipher#key (the # syntax means instance variable)

If the key submitted has capital letters or numbers, throw an ArgumentError with a message to that effect.

Some examples:
@cipher = Cipher.new
@cipher.key #=> "duxrceqyaimciuucnelkeoxjhdyduucpmrxmaivacmybmsdrzwqxvbxsygzsabdjmdjabeorttiwinfrpmpogvabiofqe
*/

/*
elapsed:  29 mins



input
- message string 'plaintext' : message to be encoded
- cipher key 'key' : key to be used to define shift for each letter

output
- encoded message 'encodedtext' : each letter shifted according to 'key'

rules
- maintain case - uppercase stays uppercase, lower stays lower
  - case in key has no impact on shift (still go by letter index, A as 0 [no shift], D as 3)
- letters 'wraparound' in shift
- ignore non-alphabetic characters (they remain as is)
- remove spaces from plaintext message for security
- assume I should NOT mutate input
- key 'wrapsaround' message if message is longer

data
- define an ALPHABET string where each index corresponds to a letter

approach
- use replace / regex to remove spaces
- use replace / regex and callback function to replace letters
  - callback function needs to take match char
    - need to match key (wraparound) against alphabetic characters in plaintext
    - compare key letter against ALPHABET to determine index / shift
    - return shifted letter

notes
- if callback function is returned by another function, may be able to use a counter for every alphabetic character
*/

console.log(cipher('abcdefg', 'aaa') === 'abcdefg');
console.log(cipher('iamapandabear', 'iamapandabear') === 'qayaeaagaciai');
console.log(cipher('zzzzzzzzzz', 'abcdefghij') === 'zabcdefghi');
console.log(cipher('aa1a2a3a', 'da') === 'da1d2a3d');
console.log(cipher('aa1 a2a 3a', 'da') === 'da1 d2a 3d');
console.log(cipher('Aa1 a2a 3A', 'da') === 'Da1 d2a 3D');

function cipher(plaintext, key) {
  let replacer = () => {
    let alphaCounter = 0;
    let ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

    return function replacer(match) {
      let shift = ALPHABET.indexOf(key[alphaCounter % key.length]);
      alphaCounter += 1;

      /[A-Z]/.test(match)
      let newIndex = (ALPHABET.indexOf(match.toLowerCase()) + shift) % ALPHABET.length;
      return /[A-Z]/.test(match) ? ALPHABET[newIndex].toUpperCase() : ALPHABET[newIndex];
    };
  }
  let encoded = plaintext.replace(/[a-z]/ig, replacer());
  console.log(encoded);
  return encoded;
}