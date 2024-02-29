"use strict";
{
    function identity(arg) {
        return arg;
    }
    let identityCopy1 = identity;
    let identifyCopy2 = identity;
    let identityCopy3 = identity;
    identityCopy3('hello');
    let identity2 = identity;
    // identity2('hello'); // can no longer pass in a string
}
