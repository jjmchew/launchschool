console.log('1',  (false && undefined)  );  // false
console.log('2',  (false || undefined)  );  // undefined
console.log('3',  ((false && undefined) || (false || undefined))  );  // undefined
console.log('4',  ((false || undefined) || (false && undefined))  );  // false
console.log('5',  ((false && undefined) && (false || undefined))  );  // false
console.log('6',  ((false || undefined) && (false && undefined))  );  // false *** WRONG - should be undefined ***
console.log('7',  ('a' || (false && undefined) || '')  ); // 'a'
console.log('8',  ((false && undefined) || 'a' || '')  ); // 'a'
console.log('9',  ('a' && (false || undefined) && '')  ); // false *** WRONG - should be undefined ***
console.log('10',  ((false || undefined) && 'a' && '')  ); // false *** WRONG - should be undefined ***
