// unknown
{
    var p1 = function () {
        // snippet 1
        var x = "Launch School";
        if (typeof x === "string") {
            console.log(x.toUpperCase());
        }
        else {
            console.log(x.toLowerCase());
        }
        // snippet 2
        var y = "Launch School";
        if (typeof y === "string") {
            console.log(y.toUpperCase());
        }
        else {
            console.log(y.toLowerCase());
        }
        // snippet 2 has errors - since type is `unknown`, cannot access .toLowerCase() in else branch
        // in snippet 1, TS doesn't care about accessing .toLowerCase() in else branch - type is `any`
    };
    var p2 = function () {
        var userInput;
        var userName;
        userInput = 5;
        userName = userInput;
        // errors will be raised since `userInput` is `unknown` - it cannot be assigned to `userName` without further type validation
    };
    var p3 = function () {
        // implement
        function processData(data) {
            if (typeof data === 'string')
                return ("Hello, ".concat(data));
            else if (typeof data === 'number')
                return ("Age: ".concat(data));
            else
                throw new Error('Invalid data');
        }
        // Usage (test cases)
        console.log(processData("Alice")); // Should print: "Hello, Alice"
        console.log(processData(25)); // Should print: "Age: 25"
        console.log(processData(true)); // Should throw an error: "Invalid data"
    };
    p3();
}
