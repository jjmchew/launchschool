"use strict";
// https://launchschool.com/lessons/f1e59145/assignments/d469ecca
{
    // function formatName(options: NameOptions): string {
    // Your implementation here
    // }
    // const formattedName = formatName({
    //   firstName: "Jane",
    //   lastName: "Smith",
    //   title: "Dr.",
    // });
    // test code
    // console.log(formattedName); // "Dr. Jane Smith"
    // console.log(formatName({})); // John Doe
    // don't use `??` to handle optional properties
}
{
    // non-mutating:
    // function formatName({
    //   firstName = 'John',
    //   lastName = 'Doe',
    //   title = '',
    // }: NameOptions): string {
    //   if (title) title += ' ';
    //   return `${title}${firstName} ${lastName}`;
    // }
    // mutating
    function formatName(obj = {}) {
        var _a, _b, _c;
        let copy = Object.assign({}, obj);
        copy.title = (_a = copy.title) !== null && _a !== void 0 ? _a : '';
        copy.firstName = (_b = copy.firstName) !== null && _b !== void 0 ? _b : 'John';
        copy.lastName = (_c = copy.lastName) !== null && _c !== void 0 ? _c : 'Doe';
        if (copy.title)
            copy.title += ' ';
        return `${copy.title}${copy.firstName} ${copy.lastName}`;
    }
    const formattedName = formatName({
        firstName: "Jane",
        lastName: "Smith",
        title: "Dr.",
    });
    // test code
    console.log(formattedName); // "Dr. Jane Smith"
    console.log(formatName({})); // John Doe
    let person = {
        firstName: 'joe',
        lastName: 'guy',
        title: 'dr',
    };
    console.log(formatName(person));
    console.log(person);
}
