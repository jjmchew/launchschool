"use strict";
function isStringArray(arr) {
    return arr.every(element => typeof element === 'string');
}
console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(['test', 'string']));
