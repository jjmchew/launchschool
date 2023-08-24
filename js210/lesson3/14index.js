function indexOf(firstString, secondString) {
  let index = -1;
  substrings = getSubstrings(firstString, secondString);
  substrings.forEach((substr, i) => {
    if (substr === secondString && index === -1) {
      index = i;
    }
  });
  return index;
}

// Version1
/*
function lastIndexOf(firstString, secondString) {
  let index = -1;
  substrings = getSubstrings(firstString, secondString);
  substrings.forEach((substr, i) => {
    if (substr === secondString) index = i;
  });
  return index;
}
*/

// Further Exploration
function lastIndexOf(firstString, secondString) {
  let index = indexOf(reverse(firstString), reverse(secondString));
  if (index !== -1) {
    return firstString.length - secondString.length - indexOf(reverse(firstString), reverse(secondString));
  } else {
    return -1;
  }
}

function reverse(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    newStr.push(str[i]);
  }
  return newStr.reverse().join('');
}

function getSubstrings(firstString, secondString) {
  substrings = [];
  let substr;
  for (let i = 0; i < firstString.length - secondString.length + 1; i++) {
    substr = '';
    for (let j = 0; j < secondString.length; j++) {
      substr += firstString[i + j];
    }
    substrings.push(substr);
  }
  return substrings;
}


console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

console.log(lastIndexOf('Blue Whale', 'e'));  // 9
console.log(lastIndexOf('canal', 'a'));       // 3
console.log(indexOf('canal', 'a'));           // 1
