// type predicates
{
  type Vehicle = { make: string; model: string; year: number };
  type Motorcycle = Vehicle & { type: "motorcycle" };
  type Car = Vehicle & { type: "car"; doors: number };

  function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
    return (vehicle as Car).type === 'car';
  }

  // Usage
  let myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    type: "car",
    doors: 4,
  };

  if (isCar(myCar)) {
    console.log(myCar.doors);
  }

  let myMotorcycle: Motorcycle = {
    make: 'Suzuki',
    model: 'something',
    year: 2023,
    type: 'motorcycle',
  };
  console.log(isCar(myMotorcycle));
}