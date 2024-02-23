{
  // #region Problem 1
  const p1 = function() {
    class Person {
      age?: number;
      name: string;
    
      constructor(age?: number, name: string) {
        this.name = name;
        this.age = age;
      }
    }
    // **WRONG** : will raise error:  since `age` is optional (may be undefined) it cannot be assigned to `this.age` without evaluating

    // error occurs since an optional parameter cannot follow a required parameter
  };
  // p1();
  // #endregion


  // #region Problem 2
  const p2 = function() {
    // given:
    interface Movable {
      speed: number;
      move(): void;
    }

    // implement:
    class Car implements Movable {
      speed: number;

      constructor(speed: number) {
        this.speed = speed;
      }

      move():void {
        console.log(`Speed is ${this.speed}`);
      }
    }

    let car1 = new Car(4);
  };
  p2();
  // #endregion
}