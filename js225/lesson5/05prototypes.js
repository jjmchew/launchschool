// Problem 1
// let prot = {};

// let foo = Object.create(prot);


// Problem 2
// console.log(Object.getPrototypeOf(foo) === prot);



// Problem 3
// console.log(prot.isPrototypeOf(foo));




// Problem 4
let prot = {};

let foo = Object.create(prot);

prot.isPrototypeOf(foo); // true - as above, `foo` created from `prot` using `Object.create`
Object.prototype.isPrototypeOf(foo); // true - all objects created using object literal notation have Object.prototype as part of their prototype chain