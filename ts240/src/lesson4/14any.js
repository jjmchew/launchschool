// any
{
    var p1 = function () {
        function processInput(input) {
            console.log(input.toUpperCase());
            console.log(input.toFixed(2));
            console.log(input.length);
        }
        processInput("hello");
        processInput(42);
        processInput(true);
    };
    // there will be runtime errors: not all methods are available on every type
    // - e.g., boolean does not have .toUpperCase, .toFixed, nor .length
    // p1();
    var p2 = function () {
        function processInput(input) {
            if (typeof input === 'string')
                console.log(input.toUpperCase());
            if (typeof input === 'number')
                console.log(input.toFixed(2));
            if (Array.isArray(input))
                console.log(input.length);
        }
        processInput("hello");
        processInput(42);
        processInput(true);
    };
    p2();
}
