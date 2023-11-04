// pseudo-classical pattern
/*
Vehicle
  - type
  - speed
  - getType()
  - sound()

Car < Vehicle
  - wheels
  - getWheels()

*/

let Vehicle = function (type, speed) {
  if (!(this instanceof Vehicle)) return new Vehicle(type, speed);
  this.type = type;
  this.speed = speed;
  return this;
};

Vehicle.prototype.getType = function getType() {
  console.log(this.type);
};
Vehicle.prototype.sound = function sound() {
  console.log('vehicle noises');
};

let Car = function (speed, wheels) {
  Vehicle.call(this, 'car', speed);
  this.wheels = wheels;
};
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; // *** if re-assigning prototype, need to reset constructor ***

Car.prototype.getWheels = function getWheels() {
  console.log(this.wheels);
};
Car.prototype.sound = function sound() {
  console.log('vroom vroom');
};

let vehicle1 = new Vehicle ('boat', 23);
vehicle1.getType();
vehicle1.sound();

let car1 = new Car(12, 4);
car1.getType();
car1.sound();
car1.getWheels();

console.log(car1 instanceof Vehicle);
console.log(car1 instanceof Car);
console.log(Object.getPrototypeOf(car1) === Car.prototype);
console.log(Object.getPrototypeOf(vehicle1) === Vehicle.prototype);
console.log(Object.getPrototypeOf(vehicle1) !== Object.getPrototypeOf(car1));
console.log(Car.prototype.constructor); // should be `Car`



