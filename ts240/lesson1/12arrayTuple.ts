{
  // #region Problem 1
  const p1 = function() {
    // let arr: string[] = ["hello", "world"];
    // arr.push(5);
  }
  // error : cannot add type number to array of string
  // #endregion

  // #region Problem 2
  const p2 = function() {
    // let tuple: [number, number] = [1, 2];
    // tuple.push("3");
  }
  // error : `push` can be used on tuples if type matches definition, but string does not match number
  // #endregion

  // #region Problem 3
  const p3 = function() {
    let tuple: [number, number] = [1, 2];
    tuple.push(3);
  }
  // no error : `push` can be used on tuples if type matches definition
  // #endregion

  // #region Problem 4
  const p4 = function() {
    // let tuple: [number, string] = [1, "2"];
    // tuple[0] = "1";
  }
  // error : cannot assign a string to a number
  // #endregion

  // #region Problem 5
  const p5 = function() {
    const myArray: Array<string | boolean> = ["is", "launch school", "awesome", true, "or", false];
  }
  // Array<string | boolean>  OR  (string | boolean)[]
  // #endregion
}