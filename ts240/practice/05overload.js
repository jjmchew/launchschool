"use strict";
{
    function getLengthOfArray(value) {
        if (Array.isArray(value)) {
            return value.toString(); // incorrect implementation
        }
        else {
            return "Not an array!";
        }
    }
    const numberResult = getLengthOfArray(["a", "b", "c"]); // no Error!
    console.log(numberResult); // "a,b,c"
    console.log(typeof numberResult); // string - even tho numberResult was originally typed as "number"
    const newNum = numberResult;
    // const newStr: string = numberResult; // TS still thinks `numberResult` is a number!!
}
