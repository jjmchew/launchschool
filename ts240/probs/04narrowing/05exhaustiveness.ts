// exhaustiveness
{

  function assertNever(input: never): never {
    throw new Error(`new case encountered: ${input}`);
  }

  type Circle = {
    kind: "circle";
    radius: number;
  };
  
  type Square = {
    kind: "square";
    sideLength: number;
  };
  
  // type Rect = {
  //   kind: 'rect',
  //   h: 3,
  //   w: 4,
  // }

  type Shape = Circle | Square; //| Rect;

  function getArea(shape: Shape): number {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
    } else if (shape.kind === 'square') {
      return shape.sideLength ** 2;
    } else return assertNever(shape);
  }

  
  // test code
  console.log(getArea({ kind: "circle", radius: 10 }));
  console.log(getArea({ kind: "square", sideLength: 10 }));

}