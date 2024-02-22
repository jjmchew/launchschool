// #region Problem 1
var p1 = function () {
    var x = 2;
    var y = 2;
    var result = x + y;
};
// yes - result will produce an error since x and y are both numbers
//     - x + y is a number which cannot be assigned to a string
// #endregion
// #region Problem 2
var p2 = function () {
    var x = 2;
    var y = "2";
    var result = x + y;
};
// no error - x + y will be coerced into a string, which can be assigned to result
// #endregion
// #region Problem 3
var p3 = function () {
    var x = 2;
    var y = "2";
    var result = x === y;
};
// error - x === y are not the same types, so the use of `===` will raise an error
// #endregion
