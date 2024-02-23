"use strict";
function testFunction(param) {
    param && console.log(param, 'Input is defined and not empty');
}
testFunction('');
testFunction(undefined);
testFunction('hello');
