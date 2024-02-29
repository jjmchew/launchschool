"use strict";
// https://launchschool.com/lessons/18156389/assignments/7aa69c34
{
    const customArray = ["apple", 42, "banana"];
    // implement:
    function processCustomArray(arr) {
        let result = [];
        for (const key in arr) {
            const el = arr[key];
            if (typeof el === 'string') {
                result.push(el.toUpperCase());
            }
        }
        return result;
    }
    let strs = processCustomArray(customArray);
    console.log(strs);
}
