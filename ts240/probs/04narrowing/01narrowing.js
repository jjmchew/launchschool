function printLength(param) {
    if (Array.isArray(param))
        return "Array count: ".concat(param.length);
    else
        return "String length: ".concat(param.length);
}
console.log(printLength('hello'));
console.log(printLength(['hello', 'world']));
