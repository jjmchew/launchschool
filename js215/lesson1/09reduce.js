function myReduce(array, func, initial) {
  let startIndex = !!initial ? 0 : 1;
  let returnVal = initial || array[0];

  for (let i = startIndex; i < array.length; i += 1) {
    returnVal = func(returnVal, array[i]);
  }

  console.log(returnVal);
  return returnVal;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49







function longestWord(words) {
  let result = words.reduce((result, word) => longest(result, word));
  console.log(result);
  return result;
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

longestWord(['abc', 'launch', 'targets', '']);      // "targets"