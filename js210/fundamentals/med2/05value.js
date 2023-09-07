const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); //5

/*
In JS, arrays are also objects and non-integer indexes can be created and assigned, similar to other JS objects.
The `Array.prototype.length` method will return an integer 1 higher than the largest integer index within the array.
Non-integer indexes are coerced to, and stored as, strings.
Thus, line 3 will create an index `'3.4'` referencing value `'Oranges'`, which will not be reflected in the value returned by `array.length`.
Line 7 will create an index `-2` referencing value `'Watermelon'`, which will also not be reflected in the value returned by `array.length`.
However, `Object.keys` will include non-integer indexes such as `'3.4'` and `'-2'` and the `length` returned will be 5.
*/


