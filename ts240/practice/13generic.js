"use strict";
// https://launchschool.com/lessons/18156389/assignments/f0138b31
{
    // rewrite to make type-safe
    // function getProperty(obj, key) {
    //   return obj[key];
    // }
}
{
    function getProperty(obj, key) {
        return obj[key];
    }
    let val1 = getProperty({ name: 'john' }, 'name');
    let val2 = getProperty({ name: 'john', age: 34 }, 'age');
}
