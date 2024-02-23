// type predicates
{
    function isCar(vehicle) {
        return vehicle.type === 'car';
    }
    // Usage
    var myCar = {
        make: "Toyota",
        model: "Camry",
        year: 2021,
        type: "car",
        doors: 4
    };
    if (isCar(myCar)) {
        console.log(myCar.doors);
    }
    var myMotorcycle = {
        make: 'Suzuki',
        model: 'something',
        year: 2023,
        type: 'motorcycle'
    };
    console.log(isCar(myMotorcycle));
}
