"use strict";
// exceptions
{
    // given
    function sqrt(x) {
        if (x < 0) {
            throw new Error("Cannot calculate square root of a negative number");
        }
        return Math.sqrt(x);
    }
    // implement safeSqrt using try/catch blocks
    function safeSqrt(x) {
        try {
            return sqrt(x);
        }
        catch (e) {
            if (e instanceof Error)
                return -1;
            else
                throw e;
        }
    }
    console.log(safeSqrt(4));
    console.log(safeSqrt(-3));
}
