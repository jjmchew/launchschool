"use strict";
// Practice Problem 3
// implement the function `processInput` (add all type annotations) to produce the desired output
{
    // type Input = string | string[];
    // function processInput(input: Input) {
    //   // implementation here
    // }
    // // do not change:
    // let numVar: number = processInput(['aa', 'b', 'cc']);
    // let strVar: string = processInput('hello');
    // console.log(numVar); // 5  (total number of all characters in input array)
    // console.log(strVar); // 'ho' (first and last characters of input string)
}
// My answer
{
    function processInput(input) {
        var _a, _b;
        if (typeof input === 'string') {
            const length = input.length;
            const first = (_a = input[0]) !== null && _a !== void 0 ? _a : '';
            const last = (_b = input[length - 1]) !== null && _b !== void 0 ? _b : '';
            return first + last;
        }
        else {
            return input.join('').length;
        }
    }
    // do not change:
    let numVar = processInput(['aa', 'b', 'cc']);
    let strVar = processInput('hello');
    console.log(numVar); // 5  (total number of all characters in input array)
    console.log(strVar); // 'ho' (first and last characters of input string)
}
