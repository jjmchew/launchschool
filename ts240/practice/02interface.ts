{
  const test1 = function() {
    interface Mammal {
      name: string,  // can use commas
      legs: number,
    }

    let cat: Mammal = {
      name: 'bob',
      legs: 4,
    }

    console.log(cat);
  }
  test1();

  const test2 = function() {
    interface Mammal {
      name: string;  // can use semis
      legs: number;
    }

    let dog: Mammal = {
      name: 'dog',
      legs: 4,
    };

    console.log(dog);
  }
  test2();

  const test3 = function() {
    interface Mammal {
      name: string;  // can mix semis and commas
      legs: number,
    }

    let dog: Mammal = {
      name: 'dog2',
      legs: 4,
    };

    console.log(dog);
  }
  test3();
}