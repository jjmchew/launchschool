// Q1

let counter;

function startCounting() {
  let countNum = 1;
  counter = setInterval(() => {
    console.log(countNum);
    countNum += 1;
  }, 1000);
  return counter;
}

function stopCounting(counter) {
  clearInterval(counter);
}

startCounting();
stopCounting(counter);