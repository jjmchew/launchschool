function filterByType(arr, type) {
    return arr.filter(function (element) { return typeof element === type; });
}
console.log(filterByType(["hello", "world", 42, true], "string"));
