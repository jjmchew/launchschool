const rlSync = require('readline-sync');

const SQM_SQFT = 10.7639;

console.log('Are your dimensions in meters (m) or feet (f)?');
let units = rlSync.prompt() === 'm' ? 'm' : 'f';
let displayUnits = units === 'm' ? ['meters', 'feet'] : ['feet', 'meters'];

console.log(`Enter the length of the room in ${displayUnits[0]}:`);
let length = parseInt(rlSync.prompt(), 10);

console.log(`Enter the width of the room in ${displayUnits[1]}:`);
let width = parseInt(rlSync.prompt(), 10);

let area = length * width;
let converted;

if (units === 'm') {
  converted = area * SQM_SQFT;
} else {
  converted = area / SQM_SQFT;
}

console.log(`The area of the room is ${area.toFixed(2)} square ${displayUnits[0]} (${converted.toFixed(2)} square ${displayUnits[1]}).`);
