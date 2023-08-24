function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) return false;

  for (let num = 3; num <= number / 2; num += 2) {
    if (number % num === 0) return false;
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log('null');
    return null;
  }
  for (let i = expectedSum; i >= expectedSum / 2; i--) {
    if (isPrime(i)) {
      if (isPrime(expectedSum - i)) {
        console.log(`${expectedSum - i} ${i}`);
      }
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
