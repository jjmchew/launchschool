const numbers = new Set();

for (let i = 0; i < 20; i += 1) {
  let rand = Math.floor(Math.random() * 10);
  numbers.add(rand);
}

console.log(numbers);
console.log(numbers.size);