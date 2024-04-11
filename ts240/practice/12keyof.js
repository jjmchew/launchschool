"use strict";
// https://launchschool.com/lessons/18156389/assignments/3a854887
{
    // given
    function getProperty(obj, key) {
        return obj[key];
    }
    const obj = {
        name: "John",
        age: 30,
    };
    const x = getProperty(obj, "name");
    const y = getProperty(obj, "age");
    // fix object types for 'x' and 'y' so that they can be automatically inferred (not unknown)
}
{
    function getProperty(obj, key) {
        const el = obj[key];
        return el;
    }
    const obj = {
        name: "John",
        age: 30,
        1: true,
    };
    const x = getProperty(obj, "name");
    const y = getProperty(obj, "age");
    const z = getProperty(obj, 1);
}