// Object Linking to Other Object

/*
Animal
  - name
  - type
  - say()
  - getType()

Dog < Animal
  - breed
  - say() : 'bark'
  - wag()
*/

let Animal = {
  init(name, type) {
    this.name = name;
    this.type = type;
    return this;
  },
  say() {
    console.log(this.name, ':  animal noises');
  },
  getType() {
    console.log(this.type);
  },
};

let animal1 = Object.create(Animal).init('george', 'bear');
console.log(animal1);
animal1.say();
animal1.getType();

// #region Version1
// let Dog = Object.create(Animal);
// Dog.init = function(name, breed) {
//   Animal.init.call(this, name, 'dog');
//   this.breed = breed;
//   return this;
// };
// Dog.say = function say() {
//   console.log(this.name, ': bow wow');
// };
// Dog.wag = function wag() {
//   console.log('wag wag');
// };
// #endregion

let Dog = {
  init(name, breed) {
    Animal.init.call(this, name, 'dog');
    this.breed = breed;
    return this;
  },
  say() {
    console.log(this.name, ': bow wow');
  },
  wag() {
    console.log('wag wag');
  },
};
Object.setPrototypeOf(Dog, Animal);

let dog1 = Object.create(Dog).init('sparky', 'mutt');
console.log(dog1);
dog1.say();
dog1.getType();
dog1.wag();

console.log('prototypeOf', Animal.isPrototypeOf(dog1));
console.log('prototypeOf', Dog.isPrototypeOf(dog1));