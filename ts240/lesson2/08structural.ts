// structural typing
{
  // #region Problem 1
  const p1 = function() {
    type Fruit = {
      name: string;
      color: string;
    };
    
    type Apple = {
      name: string;
      color: string;
      variety: string;
    };
    
    function describeFruit(fruit: Fruit): string {
      return `${fruit.name} is a ${fruit.color} fruit.`;
    }
    
    const goldenDelicious: Apple = {
      name: "Golden Delicious",
      color: "yellow",
      variety: "apple",
    };
    
    console.log(describeFruit(goldenDelicious));
    // no error - Apple is a valid subtype of Fruit
  }
  // #endregion



  // #region Problem 2
  const p2 = function() {
    type Alien = { name: string; planet: string; age: number };
    type Human = { name: string; country: string; age: number };
    
    const et: Alien = { name: "E.T.", planet: "Unknown", age: 120 };
    const john: Human = et;
    // will raise a type error: type Alien does not have same properties as Human (i.e., 'country' is required)
  }
  // #endregion



  // #region Problem 3
  const p3 = function() {
    type Shape = { color: string; sides: number };
    type Square = { color: string; sides: number; sideLength: number };
    
    const redSquare: Square = { color: "red", sides: 4, sideLength: 5 };
    const shape: Shape = redSquare;
    
    console.log(shape.sideLength);
    // errors:
    // - once `reqSquare` is assigned to `shape`, `sideLength` will no longer be available
    // **WRONG** - output of console.log statement will be undefined
    //    - output of console.log will still work in JS (no type annotations)
    //    - thus output of console.log will be `5`
    
    // **need to distinguish between compile-time errors and runtime errors
  }
  // #endregion
}