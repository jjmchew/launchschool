// readonly properties
{
  // given:
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  // define:
  function movePoint(point: Point, dx: number, dy: number): Point {
    return {
      x: point.x + dx,
      y: point.y + dy,
    };
  }

  console.log(movePoint({x: 3, y: 4}, 2, 2));  // {x: 5, y: 6}
}