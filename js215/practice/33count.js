/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

/*
input
- string with characters

output
- object with count of each character


*/


function count(string) {
  let output = {};
  string.split('').forEach(char => {
    output[char] = output[char] || 0;
    output[char] += 1;
  });
  console.log(output);
  return output;
}

count('aba'); // {'a': 2, 'b': 1}