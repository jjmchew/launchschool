// common properties
{
  // given
  // interface Rectangle {
  //   length: number;
  //   width: number;
  //   color: string;
  // }
  
  // interface Circle {
  //   radius: number;
  //   color: string;
  // }

  // extract shared properties:
  interface Shape {
    color: string,
  }

  interface Rectangle extends Shape {
    length: number,
    width: number,
  }

  interface Circle extends Shape {
    radius: number,
  }

  function displayShapeInfo(shape: Rectangle | Circle): string {
    if ('length' in shape) return(`A ${shape.color} rectangle with length ${shape.length}, width ${shape.width}.`);
    else return(`A ${shape.color} circle with radius ${shape.radius}.`);
  }

  const shape1: Rectangle = {
    color: 'red',
    length: 3,
    width: 5,
  };

  const shape2: Circle = {
    color: 'blue',
    radius: 45,
  };

  console.log(displayShapeInfo(shape1));
  console.log(displayShapeInfo(shape2));
}