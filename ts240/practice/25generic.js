"use strict";
// https://launchschool.com/exercises/b89d03b7
{
    /*
    Create a function named wrapInArray that takes a parameter that could either be a string or a number, and returns an array containing just that value.
  
    Expected output:
  
    Copy Code
    ["hello"]
    [100]
    */
}
{
    // #region V1
    // playing around with this problem:  can still reverse output - doesn't restrict to just string:string, number:number
    // type Valid = string | number;
    // function wrapInArray(param: Valid): [Valid] {
    //   if (typeof param === 'string') return [Number(param)];
    //   else return [String(param)];
    // }
    // #endregion
    // #region V2 (with predicates)
    function isStringAr(arr) {
        return arr.every(el => typeof el === 'string');
    }
    function isNumberAr(arr) {
        return arr.every(el => typeof el === 'number');
    }
    function wrapInArray(param) {
        if (typeof param === 'string' || typeof param === 'number')
            return [param];
        else {
            throw new Error('invalid parameter type');
        }
    }
    // #endregion
    const ar1 = wrapInArray('d');
    const sAr1 = isStringAr(ar1) ? ar1 : [''];
    const ar2 = wrapInArray(2);
    const nAr2 = isNumberAr(ar2) ? ar2 : [NaN];
    // const ar3 = wrapInArray(false);
    console.log(ar1, sAr1);
    console.log(ar2, nAr2);
}
