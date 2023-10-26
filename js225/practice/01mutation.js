/*
https://launchschool.com/lessons/4671d66f/assignments/9695cfa4
*/

// Problem 4
// let a = 10;
// let obj = {
//   a
// }

// let newObj = obj;
// newObj.a += 10;

// console.log(obj.a === a); // false
// console.log(newObj.a === obj.a); // true


// Problem 5
// let animal = {
//   name: 'Pumbaa',
//   species: 'Phacochoerus africanus',
// };

// let menagerie = {
//   warthog: animal,
// };

// animal = {
//   name: 'Timon',
//   species: 'Suricata suricatta',
// };

// menagerie.meerkat = animal;

// menagerie.warthog === animal; // false
// menagerie.meerkat === animal; // true
/* 
`menagerie.meerkat` references the same object as the most recent definition of `animal`.
When `animal` is assigned to an object with property `name` referencing `Timon`, etc. this is a *re-assignment*.
Hence, `menagerie.warthog` still refers to the object `animal` previously referenced
(which has property `name` assigned to `Pumba`) and is a *different* object from the one with `name` `Timon`.
*/


let animal = { name: 'Tiger' };
let zoo = { cage1: animal };
animal = { name: 'Panda' };  // note the re-assignment
zoo.cage2 = animal;

console.log(zoo.cage1 === animal); // false - the old object 'Tiger' is still assigned to `cage1`
console.log(zoo.cage2 === animal); // true