"use strict";
// object spreading
{
    const person = {
        name: "John",
        age: 30,
    };
    const address = {
        street: "123 Main St",
        city: "Tokyo",
        country: "Japan",
    };
    const combined = Object.assign(Object.assign(Object.assign({}, person), address), { phone: "555-1234" });
    // no errors - all types are consistent
}
