/*
input
- 2 strings, each representing a version number

output
- integer:
  - 1:  version1 > version2
  - -1: version1 < version2
  - 0: version1 === version2
- null:
  - version contains characters other than `.` and digits

rules
- assume input versions are strings (multiple decimal pts given)
- sequence of natural numbers (assume no negatives) separate by `.`
- always starts with a number, then a `.`
- parse as numbers:  i.e., `2` < `18`
- e.g., `1.2` === `1.2.0.0`;  assume any number of `.0` added has no impact

data structure
- split string into array of sections (of numbers); can compare numbers at same index
- 

approach
- check for invalid characters first (non-digit, non-`.`) - can use regex
- split version number into array, each section a number
- create variable to track lastIndex

- determine which version has less sections
- start at section w/ index 0, iterate to lower number of sections

- for each section:
    - if v1 < v2, output = -1, return output (no need to check further)
    - if v1 > v2, output = 1, return output (no need to check further)
    - if v1 === v2, track lastIndex; check next section
- if output is 1 (v1 > v2) or -1 (v1 < v2) additional sections don't matter (i.e., # of sections is not the same)

- if output is 0 (i.e., no return value from code, yet):
  - if additional remaining sections are NOT `0` then version with more sections is larger
  - if additional remaining sections are ALL `0`, can ignore them
*/

console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1', '1.0.0.0') === 0);
console.log(compareVersions('1.0', '1.1.0.0') === -1);
console.log(compareVersions('1.2', '1.1.0') === 1);
console.log(compareVersions('1.2.0.0', '1.2') === 0);
console.log(compareVersions('1.2.0.1', '1.2') === 1);
console.log(compareVersions('1.2.0.0', '1.18.2') === -1);
console.log(compareVersions('13.37', '1.18.2') === 1);
console.log(compareVersions('13.37-3', '1.18.2') === null);
console.log(compareVersions('', '1.18.2') === null);
console.log(compareVersions('1.3', '1a18.2') === null);
console.log(compareVersions('1..7', '1.18.2') === null);
console.log(compareVersions('.7', '1.18.2') === null);

function compareVersions(version1, version2) {
  let isValid = (ver) => {
    if (!ver) return false;
    let match = ver.replace(/(\d+\.?)*/, '*');
    if (match === '*') return true;
    return false;
  };

  if (!isValid(version1) || !isValid(version2)) return null;

  let v1 = version1.split(`.`).map(str => parseInt(str, 10));
  let v2 = version2.split(`.`).map(str => parseInt(str, 10));
  let sections = v1.length < v2.length ? v1.length : v2.length;

  let lastIndex = null;
  for (let index = 0; index < sections; index += 1) {
    if (v1[index] < v2[index]) return -1;
    else if (v1[index] > v2[index]) return 1;
    else lastIndex = index;
  }

  let allZero = (sections) => sections.every(num => num === 0);

  if (lastIndex !== null) {
    let additionalSections = v1.length < v2.length ? v2.slice(lastIndex + 1) : v1.slice(lastIndex + 1);
    if (allZero(additionalSections)) return 0;
    else if (v1.length < v2.length) return -1;
    else if (v1.length > v2.length) return 1;
  }

  return 'error';
}
