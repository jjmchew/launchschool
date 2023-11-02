/*
Animal
- has method 'say'
- has method 'getName'
- has data 'name'

Dog < Animal
- has method 'say'
- has data 'breed'
*/

// ===============  Prototypal inheritance

console.log('============== Prototypal inheritance ================');

let Animal = {
  constructor(name) {
    this.name = name;
  },
  say() {
    console.log('animal noises');
  },
  getName() {
    console.log(this.name);
  },
};

let animal1 = Object.create(Animal);
animal1.constructor('animal1');

let animal2 = Object.create(Animal);
animal2.constructor('animal2');
animal2.name = 'george';

console.log(animal1);
animal1.getName();
animal1.say();

console.log(animal2);
animal2.getName();
animal2.say();

// 1 way to do this
let Dog = {
  constructor(name, breed) {
    Animal.constructor.call(this, name);
    this.breed = breed;
  },
  say() {
    console.log('bark');
  },
};
console.log(Object.getPrototypeOf(Dog));
Object.setPrototypeOf(Dog, Animal); // manually set prototype (slow)
console.log(Object.getPrototypeOf(Dog));

let dog1 = Object.create(Dog);
dog1.constructor('Sparky', 'mutt');

console.log(dog1);
dog1.getName();
dog1.say();

// another way to do this
let Dog2 = Object.create(Animal); // another way to set prototype (better)
Dog2.constructor = function Dog2Constructor (name, breed) {
  Animal.constructor.call(this, name);
  this.breed = breed;
};
Dog2.say = function () {
  console.log('bark2');
};

let dog2 = Object.create(Dog2);
dog2.constructor('Dark Spark', 'dark mutt');

console.log(Object.getPrototypeOf(Dog2));
console.log(dog2);
dog2.getName();
dog2.say();


/*
AnimalC
- has method 'say'
- has method 'getName'
- has data 'name'

DogC < AnimalC
- has method 'say'
- has data 'breed'
*/
// ====================  Classical inheritance
console.log('============== Classical inheritance ================');

function AnimalC(name) {
  this.name = name;
}
AnimalC.prototype.say = function say() {
  console.log('animal noises');
};
AnimalC.prototype.getName = function getName() {
  console.log(this.name);
};

let cAnimal1 = new AnimalC('classical animal 1');
let cAnimal2 = new AnimalC('classical animal 2');

console.log(cAnimal1); // Note:  objects created with named constructor functions show their name
cAnimal1.getName();
cAnimal1.say();

console.log(cAnimal2);
cAnimal2.getName();
cAnimal2.say();

function DogC(name, breed) {
  AnimalC.call(this, name);
  this.breed = breed;
};
DogC.prototype = Object.create(AnimalC.prototype);
DogC.prototype.constructor = DogC;
DogC.prototype.say = function say() {
  console.log('bow wow');
};

let cDog1 = new DogC('Terrence', 'rotty');
console.log(cDog1);
cDog1.getName();
cDog1.say();
console.log(cDog1.constructor === DogC);

/*
AnimalClass
- has method 'say'
- has method 'getName'
- has data 'name'

DogClass < AnimalClass
- has method 'say'
- has data 'breed'
*/
// ====================  Classical inheritance (class)
console.log('============== Classical inheritance (class) ================');

class AnimalClass {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log('animal class noises');
  }
  getName() {
    console.log(this.name);
  }
}

let classAnimal1 = new AnimalClass('jono');
console.log(classAnimal1);
classAnimal1.getName();
classAnimal1.say();

class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  say() {
    console.log('dog class noises!');
  }
}

let classDog1 = new DogClass('mick', 'pitbull');
console.log(classDog1);
classDog1.getName();
classDog1.say();

console.log(classDog1.toString());