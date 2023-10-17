function objectsEqual(obj1, obj2) {
  let isArrEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };
  return isArrEqual(Object.keys(obj1), Object.keys(obj2)) && 
         isArrEqual(Object.values(obj1), Object.values(obj2));
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false