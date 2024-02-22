{
  // #region Problem 1
  const p1 = function() {
    // SUPPLIED FUNCTION:

    // function subtract(initial, values) {
    //   let remaining = initial;
    //   for (const value of values) {
    //     remaining -= value;
    //   }
    //   return "The result is: " + remaining;
    // }
    
    function subtract(initial: number, values: number[]) : string {
      let remaining = initial;
      for (const value of values) {
        remaining -= value;
      }
      return "The result is: " + remaining;
    }
  }
  // #endregion

  const p2 = function() {
    function displayInfo(
      name: string,
      age?: number,
      country: string = "USA"
    ): string {
      return `${name}, ${age ? age : "unknown age"}, from ${country}`;
    }
    
    console.log(displayInfo("Alice", 30));
    console.log(displayInfo("Bob", undefined, "Canada"));
    console.log(displayInfo("Charlie", 25, "UK"));
    // console.log(displayInfo('Jim', 'UK')); // note: a parameter MUST be assigned for `age` (undefined or a number)
  }
  p2();
  // #endregion
}