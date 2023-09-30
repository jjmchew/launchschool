let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141


function totalArea(shapes) {
  let areas = shapes.map(dimensions => dimensions[0] * dimensions[1]);
  let total = areas.reduce((total, area) => total + area, 0);
  console.log(total);
  return total;
}

function totalSquareArea(shapes) {
  let squares = shapes.filter(dimensions => dimensions[0] === dimensions[1]);
  let total = squares.reduce((total, dimensions) => total + (dimensions[0] * dimensions[1]), 0);
  console.log(total);
  return total;
}

totalSquareArea(rectangles);    // 121