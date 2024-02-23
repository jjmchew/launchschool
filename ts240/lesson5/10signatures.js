// index signatures
{
    var p1 = function () {
        var obj = {
            1: "Jane",
            2: "30",
            3: "female",
        };
        console.log(Object.keys(obj).every(function (key) { return typeof key === "number"; }));
        // output will be 'false' since all JS object keys are strings
    };
    p1();
    var p2 = function () {
        var obj = new Map();
        obj.set(1, "Jane");
        obj.set(2, "30");
        obj.set(3, "female");
        console.log(Object.keys(obj).every(function (key) { return typeof key === "number"; })); // Output: true
    };
    p2();
}
