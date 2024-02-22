{
  // #region Problem 1
  const p1 = function() {
    const numbersInStringFormat = ["10", "20", "30", "40"];

    function convertToNumbers(arrayIn: string[]): number[] {
      return arrayIn.map(str => parseInt(str, 10));
    }

    console.log(convertToNumbers(numbersInStringFormat));
  }
  // p1();
  // #endregion

}