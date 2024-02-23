// arrays and index signatures
{
    var customArray = ["apple", 42, "banana"];
    // implement:
    function processCustomArray(arr) {
        var output = [];
        Object.values(arr).forEach(function (value) {
            if (typeof value === 'string')
                output.push(value.toUpperCase());
        });
        return output;
    }
    console.log(processCustomArray(customArray));
}
