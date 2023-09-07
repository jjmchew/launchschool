function countOccurrences(array) {
  let tally = {};
  array.forEach(element => {
    tally[element] = tally[element] || 0;
    tally[element] += 1;
  });
  Object.keys(tally).forEach(key => console.log(`${key} => ${tally[key]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
