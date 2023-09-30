// Task
// You will be given a list of objects. Each object has type, material, and
// possibly secondMaterial. The existing materials are: paper, glass, organic,
// and plastic.

// Your job is to sort these objects across the 4 recycling bins according to
// their material (and secondMaterial if it's present), by listing the type's
// of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in
// both of the respective bins
// The order of the type's in each bin should be the same as the order of
// their respective objects was in the input list

// Example
// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"], (paper)
//   ["wine bottle", "beer bottle"],               (glass)
//   ["rotten apples", "out of date yogurt"],      (organic)
//   ["out of date yogurt"]                        (plastic)
// ]

/*
input
- array of objects:
  - each object:
    - type : mandatory : (non-blank) used to label the object
    - material : mandatory : 1 of paper, glass, organic, or plastic
    - secondMaterial (optional) : 1 of paper, glass, organic, or plastic

- output
  - object of arrays:
    - each array: a 'bin'
      - always ordered in this way: paper, glass, organic, plastic
      - a list of 'types'

- rules
  - maintain order according to order provided in input array
  - the same type may appear in more than 1 bin : material, secondMaterial
  - do validation on properties of objects (see input)
    - assume material is always lowercase
    - ignore extra properties on the object

data structure
- object for bins output
- input is array of objects

approach
- check for undefined input
- create object with empty bins as output
- iterate through input array
  - look at each object
    - check for mandatory properties; return error message immediately if necessary
    - add type to appropriate bin for material
    - add type to appropriate bin for secondMaterial (if present)

- return the bin object
*/

// console.log(sortObjects() === 'invalid input');
// console.log(sortObjects([]));
console.log(sortObjects([{}]) === 'invalid input');
console.log(sortObjects([{type: 'thing', material: 'organic', secondMaterial: 'plastic'}]));

let input1 = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
];

let output1 = {
  paper: ["wine bottle", "amazon box", "beer bottle"],
  glass: ["wine bottle", "beer bottle"],
  organic: ["rotten apples", "out of date yogurt"],
  plastic: ["out of date yogurt"],
};
console.log(sortObjects(input1));

function sortObjects(inputItems) {
  const VALID_MATERIALS = ['paper', 'glass', 'organic', 'plastic'];

  if (inputItems  === undefined) return 'invalid input';
  let bins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  };

  let validItem = item => {
    if (item.type === undefined || item.type === '') return false;
    if (item.material === undefined || !VALID_MATERIALS.includes(item.material)) return false;
    return true
  };

  for (let i = 0; i < inputItems.length; i += 1) {
    let item = inputItems[i];
    if (!validItem(item)) return 'invalid input';
    bins[item.material].push(item.type);
    if (item.secondMaterial) bins[item.secondMaterial].push(item.type);
  }
  console.log(bins);
  return bins;
}




