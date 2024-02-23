"use strict";
{
    function getArea(shape) {
        if (shape.kind === 'circle')
            return Math.PI * shape.radius * shape.radius;
        else if (shape.kind === 'square')
            return shape.sideLength * shape.sideLength;
        else
            throw new Error('new shape encountered');
    }
    // test code
    console.log(getArea({ kind: "circle", radius: 10 }));
    console.log(getArea({ kind: "square", sideLength: 10 }));
}
