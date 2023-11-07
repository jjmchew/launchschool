// creating static properties / methods

// #region using pseudo-classical
(function newScope() {
  function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    Dog.inventory.push(this);
  };
  Dog.inventory = [];
  Dog.getInventory = function () {
    console.log(Dog.inventory.map(obj => `${obj.name} (${obj.breed})`).join(' | '));
  };
  Dog.prototype.sayName = function () {
    console.log(this.name);
  };

  function Doberman(name) {
    Dog.call(this, name, 'Doberman');
  }
  Doberman.prototype = Object.create(Dog.prototype);
  Doberman.prototype.constructor = Doberman;
  Doberman.prototype.eat = function () {
    console.log('eating everything');
  };

  testCode(Dog, Doberman);
})();
// #endregion


console.log('=====================');


// #region using class syntax
(function newScope() {
  class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
      Dog.inventory.push(this);
    }
    sayName() {
      console.log(this.name);
    }
    static inventory = [];
    static getInventory () {
      console.log(Dog.inventory.map(obj => `${obj.name} (${obj.breed})`).join(' | '));
    }
  }

  class Doberman extends Dog {
    constructor(name) {
      super(name, 'doberman');
    }
    eat() {
      console.log('eating everything');
    }
  }

  testCode(Dog, Doberman);
})();
// #endregion

// #region test cod
function testCode(Dog, Doberman) {
  let dog1 = new Dog('sparky', 'mutt');
  let dog2 = new Dog('shubie', 'whippet');
  dog1.sayName();
  dog2.sayName();
  // dog2.eat();
  Dog.getInventory();

  let dog3 = new Doberman('rex');
  dog3.sayName();
  dog3.eat();
  console.log(dog3 instanceof Dog);
  console.log(dog3 instanceof Doberman);
  console.log(Object.getPrototypeOf(dog2) === Dog.prototype);
  console.log(Object.getPrototypeOf(dog3) === Doberman.prototype);
  console.log(Dog.prototype.isPrototypeOf(dog3));
  console.log(`.prototype`);
  console.log(Doberman.prototype);
  console.log(Dog.prototype);
  console.log(`[[Prototype]]`);
  console.log(Object.getPrototypeOf(dog3));
  console.log(Object.getPrototypeOf(dog2));

  Dog.getInventory();
}
// #endregion