"use strict";
// https://launchschool.com/exercises/023204de
{
    /*
    Create a generic function filterByType that filters an array based on the type provided. Use generics to return an array containing only elements of the given type.
  
    Expected output for filterByType<string>(["hello", "world", 42, true], "string"):
  
    Copy Code
    ["hello", "world"]
    */
}
{
    function filterByType(arr, type) {
        return arr.filter(el => {
            const elType = typeof el;
            if (elType === 'string' && elType === type)
                return true;
            else if (elType === 'number' && elType === type)
                return true;
            else if (elType === 'boolean' && elType === type)
                return true;
        });
    }
    const out1 = filterByType(["hello", "world", 42, true], "string");
    const out2 = filterByType(["hello", "world", 42, true], "boolean");
    console.log(out1); // ['hello', 'world']
    console.log(out2); // [42]
}
