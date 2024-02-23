// generic arrays
{
  // #region Problem 1
  const p1 = function () {
    let numbers: Array<number> = [1, 2, 3];
    // correct
  }
  // #endregion



  // #region Problem 2
  const p2 = function () {
    let strings: string[] = ["apple", "banana", "cherry"];
    // correct
  }
  // #endregion



  // #region Problem 3
  const p3 = function () {
    let bools: boolean[[]] = [true, false, true];
    // incorrect
  }
  // #endregion




  // #region Problem 4
  const p4 = function () {
    type FruitNames = "apple" | "banana" | "cherry";
    const fruits: Array<FruitNames> = ["apple", "banana", "mango"];
    // incorrect
  }
  // #endregion
}