function age() {
  const MAX = 200;
  const MIN = 20;
  let randAge = Math.floor(Math.random() * (MAX + 1 - MIN) + MIN);
  console.log(`Teddy is ${randAge} years old!`);
}

age();
