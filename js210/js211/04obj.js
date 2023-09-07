let thing1 = {
    a: 1,
    b: 2,
    add() {
      return thing1.a + thing1.b
    },
  };

let thing2 = [
  1,
  2,
  function add(a, b) {
    return a + b
  },  
];

console.log(thing1.add());
console.log('thing1 length 1: ', Object.keys(thing1).length);
thing1.c = 'hello';
console.log('thing1 length 2: ', Object.keys(thing1).length);


console.log(thing2.add());
console.log('thing2 length 1: ', thing2.length);
thing2.c = 'hello';
console.log('thing2 length 2: ', thing2.length);