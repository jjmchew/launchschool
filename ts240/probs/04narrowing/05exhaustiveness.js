"use strict";
// exhaustiveness
{
    function assertNever(input) {
        throw new Error(`new case encountered: ${input}`);
    }
    function getArea(shape) {
        if (shape.kind === "circle") {
            return Math.PI * Math.pow(shape.radius, 2);
        }
        else if (shape.kind === 'square') {
            return Math.pow(shape.sideLength, 2);
        }
        else
            return assertNever(shape);
    }
    // test code
    console.log(getArea({ kind: "circle", radius: 10 }));
    console.log(getArea({ kind: "square", sideLength: 10 }));
}
