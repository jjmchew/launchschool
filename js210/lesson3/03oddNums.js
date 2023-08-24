// VERSION 1
/*
function logOddNumbers(maxNum) {
  for (let i = 1; i <= maxNum; i++) {
    if (i % 2 !== 0) console.log(i);
  }
}
*/

// VERSION 2
/*
function logOddNumbers(maxNum) {
  for (let num = 1; num <= maxNum; num += 2) {
    console.log(num);
  }
}
*/


// VERSION 3
function logOddNumbers(maxNum) {
  for (let num = 1; num <= maxNum; num++) {
    if (num % 2 === 0) continue;
    console.log(num);
  }
}

logOddNumbers(19);
