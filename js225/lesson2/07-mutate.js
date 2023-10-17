// Problem 1
// let message = 'Hello from the global scope!';

// function func(message) {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func(message); // Hello from the function scope!
// console.log(message); // Hellow from the global scope!



// Problem 2
// let myObj = { message: 'Greetings from the global scope!' };

// function func(obj) {
//   obj.message = 'Greetings from the function scope!';
//   console.log(obj.message);
// }

// func(myObj); // Greetings from the function scope!

// console.log(myObj.message); // Greetings from the function scope!



// Problem 3
// let message = 'Hello from the global scope!';

// function func() {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func(); // Hello from the function scope!
// console.log(message); // Hello from the function scope!



// Problem 4 *** WORTH REVIEWING ***
// let a = 10;
// let obj = {
//   a
// }

// let newObj = obj;
// newObj.a += 10;

// console.log(obj.a === a); // false - both are assigned primitives separately
// console.log(newObj.a === obj.a); // true - b/c newObj.a (same as obj.a) is re-assigned at the same time



// Problem 5 *** WORTH REVIEWING ***
let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

console.log(animal);

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

console.log(animal);

menagerie.meerkat = animal;

console.log(menagerie.warthog === animal); // false
console.log(menagerie.meerkat === animal); // true

console.log(menagerie.warthog);
console.log(menagerie.meerkat);



