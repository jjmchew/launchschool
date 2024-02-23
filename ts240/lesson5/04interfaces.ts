{
  // given:
  // class Animal {
  //   constructor(name) {
  //     this.name = name;
  //   }
  
  //   makeSound() {
  //     return "Generic animal sound";
  //   }
  // }
  
  // class Dog extends Animal {
  //   constructor(name) {
  //     super(name);
  //   }
  
  //   fetch() {
  //     return `${this.name} fetches a stick.`;
  //   }
  // }
  
  // const myDog = new Dog("Rex");
  // console.log(myDog.fetch());
  
  // convert to TS

  interface AnimalInterface {
    name: string,
    makeSound: () => string;
  }

  interface DogInterface extends AnimalInterface {
    fetch: () => string;
  }

  class Dog implements DogInterface {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
    
    makeSound() {
      return "Generic animal sound";
    }

    fetch() {
      return `${this.name} fetches a stick.`;
    }
  }

  const myDog = new Dog('Rex');
  console.log(myDog.fetch());
}