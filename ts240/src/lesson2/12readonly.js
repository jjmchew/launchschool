// readonly properties
{
    // define:
    function movePoint(point, dx, dy) {
        return {
            x: point.x + dx,
            y: point.y + dy
        };
    }
    console.log(movePoint({ x: 3, y: 4 }, 2, 2));
}
