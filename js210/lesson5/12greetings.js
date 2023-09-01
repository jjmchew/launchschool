function greetings(arr, obj) {
  console.log(`Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
