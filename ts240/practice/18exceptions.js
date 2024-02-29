"use strict";
// https://launchschool.com/lessons/f1e59145/assignments/75cc972c
{
    // given
    function sqrt(x) {
        if (x < 0) {
            throw new Error("Cannot calculate square root of a negative number");
        }
        return Math.sqrt(x);
    }
    // implement:
    // function safeSqrt(x: number): number {
    //   // Implement this function.
    // }
}
{
    // My solution
    class NegativeNumError extends Error {
        constructor(message) {
            super(message);
        }
    }
    // given
    function sqrt(x) {
        if (x < 0) {
            throw new NegativeNumError("Cannot calculate square root of a negative number");
        }
        return Math.sqrt(x);
    }
    // implement:
    function safeSqrt(x) {
        try {
            if (x === 8)
                throw new Error('random error');
            return sqrt(x);
        }
        catch (e) {
            if (e instanceof NegativeNumError)
                return -1;
            else
                throw e;
        }
    }
    console.log(safeSqrt(4));
    console.log(safeSqrt(-4));
    console.log(safeSqrt(84.3));
    console.log(safeSqrt(8));
}
