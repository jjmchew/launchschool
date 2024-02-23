// the object type
{
    var p1 = function () {
        // given
        // function getProperty(obj: object, key: string) {
        //   return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
        // }
        function getProperty(obj, key) {
            return obj[key];
        }
        console.log(getProperty({ key: "value" }, "key"));
        // additional test code
        var obj = {
            name: "John",
            age: 30,
        };
        var x = getProperty(obj, "name");
        var y = getProperty(obj, "age");
        console.log(x);
        console.log(y);
    };
    // p1();
    var p2 = function () {
        function getProperty(obj, key) {
            if (typeof obj[key] === 'string')
                return String(obj[key]);
            else if (typeof obj[key] === 'number')
                return Number(obj[key]);
            else
                return obj[key];
        }
        // additional test code
        var obj = {
            name: "John",
            age: 30,
        };
        var x = getProperty(obj, "name");
        var y = getProperty(obj, "age");
        console.log(x);
        console.log(y);
    };
    p2();
}
