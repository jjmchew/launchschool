
function test1(one, two) {
  if (one && two) return `${one && two} passed.`;
  else return `${one && two} failed.`;
}

function test2(one, two) {
  if (one || two) return `${one || two} passed.`;
  else return `${one || two} failed.`;
}

console.log('1: ', test1(false));
console.log('2: ', test2(false));
console.log('3: ', test1(0, 'apple'));
console.log('4: ', test2(0, 'apple'));


/*
undefined && false // undefined
false && undefined // false

undefined || false // false
false || undefined // undefined

1: false failed.
2: undefined failed.
3: 0 failed.
4: apple passed.
*/