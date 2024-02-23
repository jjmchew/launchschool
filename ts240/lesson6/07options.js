"use strict";
// defining options types
{
    const p1 = function () {
        // given:
        function calculateRectangleArea(width, height) {
            const area = width * (height !== null && height !== void 0 ? height : width);
            return area;
        }
        console.log(calculateRectangleArea(3, 0));
        // will output 0
    };
    // p1();
    const p2 = function () {
        function formatName(options) {
            const firstName = (options === null || options === void 0 ? void 0 : options.firstName) || 'John';
            const lastName = (options === null || options === void 0 ? void 0 : options.lastName) || 'Doe';
            const title = (options === null || options === void 0 ? void 0 : options.title) ? options.title + ' ' : '';
            return `${title}${firstName} ${lastName}`;
        }
        // test code provided
        const formattedName = formatName({
            firstName: "Jane",
            lastName: "Smith",
            title: "Dr.",
        });
        console.log(formattedName); // "Dr. Jane Smith"
        console.log(formatName({})); // John Doe
    };
    // p2();
    const p3 = function () {
        function formatName({ firstName = 'John', lastName = 'Doe', title = '' }) {
            return `${title ? title + ' ' : title}${firstName} ${lastName}`;
        }
        // test code provided
        const formattedName = formatName({
            firstName: "Jane",
            lastName: "Smith",
            title: "Dr.",
        });
        console.log(formattedName); // "Dr. Jane Smith"
        console.log(formatName({})); // John Doe
    };
    p3();
}
