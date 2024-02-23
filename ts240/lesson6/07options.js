// defining options types
{
    var p1 = function () {
        // given:
        function calculateRectangleArea(width, height) {
            var area = width * (height !== null && height !== void 0 ? height : width);
            return area;
        }
        console.log(calculateRectangleArea(3, 0));
        // will output 0
    };
    // p1();
    var p2 = function () {
        function formatName(options) {
            var firstName = (options === null || options === void 0 ? void 0 : options.firstName) || 'John';
            var lastName = (options === null || options === void 0 ? void 0 : options.lastName) || 'Doe';
            var title = (options === null || options === void 0 ? void 0 : options.title) ? options.title + ' ' : '';
            return "".concat(title).concat(firstName, " ").concat(lastName);
        }
        // test code provided
        var formattedName = formatName({
            firstName: "Jane",
            lastName: "Smith",
            title: "Dr.",
        });
        console.log(formattedName); // "Dr. Jane Smith"
        console.log(formatName({})); // John Doe
    };
    // p2();
    var p3 = function () {
        function formatName(_a) {
            var _b = _a.firstName, firstName = _b === void 0 ? 'John' : _b, _c = _a.lastName, lastName = _c === void 0 ? 'Doe' : _c, _d = _a.title, title = _d === void 0 ? '' : _d;
            return "".concat(title ? title + ' ' : title).concat(firstName, " ").concat(lastName);
        }
        // test code provided
        var formattedName = formatName({
            firstName: "Jane",
            lastName: "Smith",
            title: "Dr.",
        });
        console.log(formattedName); // "Dr. Jane Smith"
        console.log(formatName({})); // John Doe
    };
    p3();
}
