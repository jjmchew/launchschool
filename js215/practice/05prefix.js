/*
Write a method to find the longest common prefix string amongst an array of strings

If there is no common prefix, return an empty string "".
Example 1:
given:  ["flower", "flow", "flight"]
output: "fl"

example 2:
given: ["dog", "racecar", "car"]
output:  ""

Note:  all inputs are lowercase lettesr a-z
*/

/*
Elapsed:  16 mins


input
- array of strings (all lowercase letters a-z)

output
- string : prefix common to every string in array

rules
- return "" if there is no common prefix

data structure
- array for inputs
- use strings for comparisons

approach
- create an empty string to track possible prefix ('prefix')
- find string with shortest length (helper function)
  - use map, reduce to iterate through input array
- iterate from index 1 to end of shortest string ('index')
  - define a test prefix from first string in array : from 0 to index
  - iterate through each string remaining in input strings and see if the same substring matches test prefix
    - if not exit both loops
    - if so, continue
  - if all strings have the test prefix, then re-assign it to 'prefix'
- return prefix

*/

console.log(commonPrefix(["flower", "flow", "flight"]) === 'fl');
console.log(commonPrefix(["dog", "racecar", "car"]) === '');
console.log(commonPrefix(["", "racecar", "rar"]) === '');
console.log(commonPrefix(["aa", "a", "aaaa"]) === 'a');

function commonPrefix(stringArr) {
  let shortestLength = () => {
    return stringArr.map(word => word.length)
                    .reduce((shortest, length) => length < shortest ? length : shortest);
  };
  let prefix = '';

  for (let index = 1; index <= shortestLength(); index += 1) {
    let testPrefix = stringArr[0].slice(0, index);
    for (let wordIdx = 1; wordIdx < stringArr.length; wordIdx += 1) {
      if (testPrefix !== stringArr[wordIdx].slice(0, index)) return prefix;
    }
    prefix = testPrefix;
  }
  return prefix;
}