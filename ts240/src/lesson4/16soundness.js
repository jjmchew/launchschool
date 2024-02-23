// type soundness
{
    var p1 = function () {
        // given
        // example 1
        var x1 = "Launch School";
        var y1 = x1;
        console.log(y1);
        // example 2
        var x2 = "Launch School";
        var y2 = x2;
        // implement
        function isNumber(val) {
            return typeof val === 'number';
        }
        console.log(isNumber(y1), isNumber(y2));
    };
    // p1();
    var p2 = function () {
        function safeGet(array, index) {
            if (index < array.length)
                return array[index];
            else
                return undefined;
        }
        // test code
        var names = ["John", "Jane"];
        var name = safeGet(names, 2); // Should return undefined
        console.log('|', name, '|');
        var numbers = [1, 2, 3];
        var number = safeGet(numbers, 1); // Should return 2
        console.log(number);
    };
    p2();
}
