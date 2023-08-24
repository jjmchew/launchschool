// Version1
/*
function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) console.log(`${num}!`);
    else if (num % 3 === 0 || num % 5 === 0) console.log(`${num}`);
  }
}
*/

// Further Exploration
let multiplesOfThreeAndFive = function(low=1, high=100) {
  for (let num = low; num <= high; num++) {
    if (num % 3 === 0 && num % 5 === 0) console.log(String(num) + '!');
    else if (num % 3 === 0 || num % 5 === 0) console.log(String(num));
  }
}

multiplesOfThreeAndFive();
multiplesOfThreeAndFive(3, 15);

