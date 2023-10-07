/*
Given 2 strings, find out if there is a substring that appears in both strings.
Return true if you find a substring that appears in both strings.
Return false if you do not.
We only care about substrings that are longer than 1 letter long.
=end

p substring_test('Something', 'Fun') == false
p substring_test('Something', 'Home') == true
p substring_test('Something', '') == false
p substring_test('', 'Something') == false
p substring_test('BANANA', 'banana') == true
p substring_test('test', 'lllt') == false
p substring_test('','') == false
p substring_test('1234567', '541265') == true
p substring_test('supercalifragilisticexpialidocious', 'SoundOfItIsAtrocious') == true

*/

/*
input
- 2 strings

output
- true OR false
  - if a substring > 1 char appears in both string1 and string2

rules
- case insensitive

notes

approach
- find shortest string
- create an array of all possible substrings from shortest string
  - from 2 letters up to complete word

- test if any of these substrings appear in other string
  - can use includes
  - if so, return true
- return false (if nothing else returns true)
*/

function substring_test(string1, string2) {
  if (string1 === '' || string2 === '') return false;

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  if (string2.length < string1.length) [string1, string2] = [string2, string1];

  let getSubstrings = () => {
    let substrings = [];
    for (let idx1 = 0; idx1 < string1.length - 1; idx1 += 1) {
      for (let idx2 = idx1 + 1; idx2 < string1.length; idx2 += 1) {
        substrings.push(string1.slice(idx1, idx2 + 1));
      }
    }
    return substrings;
  }
  let substrings = getSubstrings();
  
  for (let i = 0; i < substrings.length; i += 1) {
    if (string2.includes(substrings[i])) return true;
  }

  return false;
}
console.log(substring_test('Something', 'Fun') === false);
console.log(substring_test('Something', 'Home') === true);
console.log(substring_test('Something', '') === false);
console.log(substring_test('', 'Something') === false);
console.log(substring_test('BANANA', 'banana') === true);
console.log(substring_test('test', 'lllt') === false);
console.log(substring_test('','') === false);
console.log(substring_test('1234567', '541265') === true);
console.log(substring_test('supercalifragilisticexpialidocious', 'SoundOfItIsAtrocious') === true);