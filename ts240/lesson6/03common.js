// common properties
{
    function displayShapeInfo(shape) {
        if ('length' in shape)
            return ("A ".concat(shape.color, " rectangle with length ").concat(shape.length, ", width ").concat(shape.width, "."));
        else
            return ("A ".concat(shape.color, " circle with radius ").concat(shape.radius, "."));
    }
    var shape1 = {
        color: 'red',
        length: 3,
        width: 5,
    };
    var shape2 = {
        color: 'blue',
        radius: 45,
    };
    console.log(displayShapeInfo(shape1));
    console.log(displayShapeInfo(shape2));
}
