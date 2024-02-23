{
  // #region Problem 1
  const p1 = function() {
    let x: number = 2;
    let y: number = 2;
    let result: string = x + y;
  }
  // yes - result will produce an error since x and y are both numbers
  //     - x + y is a number which cannot be assigned to a string
  // #endregion

  // #region Problem 2
  const p2 = function() {
    let x: number = 2;
    let y: string = "2";
    let result: string = x + y;
  }
  // no error - x + y will be coerced into a string, which can be assigned to result
  // #endregion

  // #region Problem 3 **WRONG**
  const p3 = function() {
    let x: number = 2;
    let y: string = "2";
    let result: boolean = x === y;
  }
  // error - x === y are not the same types, so the use of `===` will raise an error
  // #endregion

  // #region Problem 4
  const p4 = function() {
    let x: boolean = true;
    let y: number = 2;
    let z: string = "";
    let result: boolean = x || y || z;
  }
  // no error - the `||` operator will short circuit and return true;
  //          - if the order of assignment was changed e.g., `y || x || z`
  //            then an error will occur
  // #endregion

  // #region Problem 5 **WRONG** - need to review type coercion rules!
  const p5 = function() {
    let x: boolean = true;
    let y: number = 2;
    let z: string = "";
    let result: boolean = (x && y) || z;
  }
  // **WRONG** no error - since (x && y) will evaluate to true which can be assigned to result
  // error:  (true && number) will evaluate to a number, which cannot be assigned to result
  // #endregion

  // #region Problem 6
  const p6 = function() {
    let x: undefined;
    x = 1;
  }
  // error : type number cannot be assigned to type undefined
  // #endregion
}