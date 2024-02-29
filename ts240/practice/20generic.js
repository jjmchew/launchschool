"use strict";
// https://launchschool.com/exercises/39a4a38b
{
    // Write a generic function getProperty that retrieves the value of a property from an object, where the key is guaranteed to be a property of the object.
    // Expected outcome:
    // The function should not compile if the key is not a property of the object.
}
{
    function getProperty(obj, key) {
        return obj[key];
    }
    // test code
    const obj = { name: 'john', age: 34, hasKids: true };
    const test1 = getProperty(obj, 'hasKids');
    const test2 = getProperty(obj, 'name');
    const test3 = getProperty(obj, 'age');
    // const test4 = getProperty(obj, 'pizza');
}
