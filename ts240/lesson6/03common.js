"use strict";
// common properties
{
    function displayShapeInfo(shape) {
        if ('length' in shape)
            return (`A ${shape.color} rectangle with length ${shape.length}, width ${shape.width}.`);
        else
            return (`A ${shape.color} circle with radius ${shape.radius}.`);
    }
    const shape1 = {
        color: 'red',
        length: 3,
        width: 5,
    };
    const shape2 = {
        color: 'blue',
        radius: 45,
    };
    console.log(displayShapeInfo(shape1));
    console.log(displayShapeInfo(shape2));
}
