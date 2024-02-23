{
    // #region Problem 1
    var p1 = function () {
        var numbersInStringFormat = ["10", "20", "30", "40"];
        function convertToNumbers(arrayIn) {
            return arrayIn.map(function (str) { return parseInt(str, 10); });
        }
        console.log(convertToNumbers(numbersInStringFormat));
    };
    p1();
    // #endregion
    // #region Problem 2
    var p2 = function () {
    };
    // #endregion
}
