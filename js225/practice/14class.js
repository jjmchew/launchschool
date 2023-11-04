// using `class`
/*
Vehicle
  - wheels
  - poweredBy
  - getWheels()

Motorcycle < Vehicle
  - sound()

Bike < Motorcycle
  - sound()
*/

let Vehicle = class {
  constructor(wheels, poweredBy) {
    this.wheels = wheels;
    this.poweredBy = poweredBy;
  }
  getWheels() {
    console.log(this.wheels);
  }
  getPoweredBy() {
    console.log(this.poweredBy);
  }
};

let Motorcycle = class extends Vehicle {
  constructor() {
    super(2, 'fuel');
  }
  sound() {
    console.log('vrooom');
  }
};

let Bike = class extends Motorcycle {
  constructor() {
    super();
  }
  sound() {
    console.log('silent');
  }
};

let vehicle = new Vehicle(4, 'fossil fuels');
let motorcycle = new Motorcycle();
let bike = new Bike();

vehicle.getWheels();
vehicle.getPoweredBy();

motorcycle.getWheels();
motorcycle.getPoweredBy();
motorcycle.sound();

bike.getWheels();
bike.getPoweredBy();
bike.sound();
