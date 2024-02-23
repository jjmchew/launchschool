"use strict";
// unknown type
{
    function logUnknown(input) {
        if (typeof input === 'string')
            console.log('string: ', input);
    }
    logUnknown('string');
    logUnknown(34);
    logUnknown(true);
}
