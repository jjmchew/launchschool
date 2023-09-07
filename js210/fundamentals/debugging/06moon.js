const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  var newSpecies = undefined;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

/*
The variable `newSpecies` has been declared with *function-scope*, which in this case is global scope.
For each iteration of the `for` loop (defined on line 13) where `i` is 1 or higher, this variable `newSpecies` carries the value defined from the previous iteration and some value is output.
If the variable `newSpecies` is 'reset' to `undefined` on each iteration, then no message will be output for species that return `false` according the function `isTransformable`.
*/
