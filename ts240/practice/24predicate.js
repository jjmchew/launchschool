"use strict";
// https://launchschool.com/exercises/a2c7b933
{
    // implement
    // function isStringArray(array: unknown[]): boolean {
    // }
    // // test code
    // console.log(isStringArray([1, 2, 3]) === false);
    // console.log(isStringArray(["test", "string"]) === true);
}
{
    // implement
    function isStringArray(array) {
        return array.every(element => typeof element === 'string');
    }
    // test code
    console.log(isStringArray([1, 2, 3]) === false);
    console.log(isStringArray(["test", "string"]) === true);
    console.log(isStringArray(["test", 3]) === false);
}
