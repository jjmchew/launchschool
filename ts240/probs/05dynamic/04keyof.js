"use strict";
// keyof
{
    function getProp(data, key) {
        console.log(data[key]);
    }
    const user = {
        name: 'joe',
        age: 34,
    };
    getProp(user, 'age');
}
