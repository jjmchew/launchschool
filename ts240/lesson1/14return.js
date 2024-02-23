{
    // #region Problem 1
    var p1 = function () {
        // SUPPLIED FUNCTION:
        // function subtract(initial, values) {
        //   let remaining = initial;
        //   for (const value of values) {
        //     remaining -= value;
        //   }
        //   return "The result is: " + remaining;
        // }
        function subtract(initial, values) {
            var remaining = initial;
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                remaining -= value;
            }
            return "The result is: " + remaining;
        }
    };
    // #endregion
    var p2 = function () {
        function displayInfo(name, age, country) {
            if (country === void 0) { country = "USA"; }
            return "".concat(name, ", ").concat(age ? age : "unknown age", ", from ").concat(country);
        }
        console.log(displayInfo("Alice", 30));
        console.log(displayInfo("Bob", undefined, "Canada"));
        console.log(displayInfo("Charlie", 25, "UK"));
    };
    p2();
    // #endregion
}
