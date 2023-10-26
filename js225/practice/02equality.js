// https://launchschool.com/exercises/1937fc28

/*
rules
- objects are equal if:
  - same keys (no more, no less)
  - same values for those keys (can use `===` for primitives, need to recursively call objectsEqual if an object)


*/
function objectsEqual(obj1, obj2) {
  let isNotObj = obj => obj === null || typeof obj !== 'object';

  if (typeof obj1 !== typeof obj2) return false;
  else if (Number.isNaN(obj1) && Number.isNaN(obj2)) return true;
  else if (isNotObj(obj1) || isNotObj(obj2)) return obj1 === obj2;
  else if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  let keys1 = Object.keys(obj1).sort();
  let keys2 = Object.keys(obj2).sort();
  for (let i = 0; i < keys1.length; i += 1) {
    if (keys1[i] !== keys2[i]) return false;
    if (!objectsEqual(obj1[keys1[i]], obj2[keys1[i]])) return false;
  }
  return true;
}

// own test cases
console.log(objectsEqual(3, '3') === false);
console.log(objectsEqual(3, 3) === true);
console.log(objectsEqual('a', 'a') === true);
console.log(objectsEqual([1, 2, 3], 3) === false);
console.log(objectsEqual([1, 2, 3], [1, 3]) === false);
console.log(objectsEqual([1, 2, 3], [1, 3, 2]) === false);
console.log(objectsEqual([1, 2, 3], [1, 2, 3]) === true);
console.log(objectsEqual([1, 2, 3], [1, , 2, 3]) === false);
console.log(objectsEqual([1, [2, 'a'], 3], [1, [2, 1], 3]) === false);
console.log(objectsEqual([1, ['a', 'd'], 3], [1, ['a', 'd'], 3]) === true);
console.log(objectsEqual([{}, 3], [{}, 3]) === true);
console.log(objectsEqual([{a: '1'}, 3], [{}, 3]) === false);
console.log(objectsEqual([{a: '1'}, 3], [{a: '2'}, 3]) === false);
console.log(objectsEqual([{a: '2'}, 3], [{a: '2'}, 3]) === true);
console.log(objectsEqual([{b: '1', a: '2'}, 3], [{a: '2', b: '1'}, 3]) === true);
console.log(objectsEqual([{b: '1', a: '2'}, NaN], [{a: '2', b: '1'}, NaN]) === true);
console.log(objectsEqual([1, , 2], [1, 2]) === false);
console.log(objectsEqual(Infinity, -Infinity) === false);
console.log(objectsEqual(Infinity, Infinity) === true);
console.log(objectsEqual(undefined, undefined) === true);
console.log(objectsEqual(NaN, 3) === false);
console.log(objectsEqual(NaN, NaN) === true);
console.log(objectsEqual(null, null) === true);
console.log(objectsEqual(null, [1, 2]) === false);
console.log(objectsEqual(2, [1, 2]) === false);

console.log(objectsEqual({a: [1, 2], b: 1}, {a: [2, 1], b: 1}) === false);                      // false
console.log(objectsEqual({a: {x: 'a'}, b: 1}, {a: {x: 'a'}, b: 1}) === true);                  // true
console.log(objectsEqual({a: {x: [1, 3, 2]}, b: 1}, {a: {x: [1, 2, 3]}, c: 1}) === false);      // false
console.log(objectsEqual({c: 1, a: {x: [1, 3, 2]}}, {a: {x: [1, 2, 3]}, c: 1}) === false);      // false
console.log(objectsEqual({a: [1, 2, 3], b: [4,5,6]}, {a: [1, 2, 3], b: [4,5,6]}) === true)     // true
console.log(objectsEqual({a: {name: 'bob', age: 40}}, {a: {name: 'bob', age: 40}}) === true)   // true
console.log(objectsEqual({a: {name: 'bob', age: 40}}, {a: {name: 'Steve', age: 40}}) === false) // false

console.log('=========');

// test code provided
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}) === true);                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}) === false);            // false
console.log(objectsEqual({}, {}) === true);                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}) === false);  // false