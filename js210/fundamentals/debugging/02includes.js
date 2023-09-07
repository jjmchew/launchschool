function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) { // updated
      return true;
    }
  }

  return false;
}
                                                                  // returns:
console.log( includesFalse([8, null, 'abc', true, 'launch', 11, false]) );       // true
console.log( includesFalse(['programming', undefined, 37, 64, true, 'false']) ); // false
console.log( includesFalse([9422, 'lambda', true, 0, '54', null]) );             // true

/*
On line 5, use of the `==` comparison will result in type coercion, leading to unexpected results.
Instead, the conditional expression should use the `===` comparison operator.
*/
