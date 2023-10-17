// Problem 1
// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;
// better to combine related properties into a single object and a use a factory to produce those objects
// will be easier to organize, scale, and understand

// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
//   setPrice(price) {
//     if (price < 0) throw Error('price cannot be negative');
//     this.price = price;
//   },
//   describe() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: ${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   },
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
//   setPrice(price) {
//     if (price < 0) throw Error('price cannot be negative');
//     this.price = price;
//   },
//   describe() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: ${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   },
// };

// Problem 2
// function setPrice(obj, price) {
//   if (price < 0) throw Error('price cannot be negative');

//   obj.price = price;
// }

// Problem 3
// function describeProduct(obj) {
//   Object.keys(obj).forEach(key => {
//     console.log(`${key}: ${obj[key]}`);
//   });
// }

// Problem 4
// scissors.describe();


// Problem 5
function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(price) {
      if (price < 0) throw Error('price cannot be negative');
      this.price = price;
    },
    describe() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: ${this.price}`);
      console.log(`Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let wrench = createProduct(2, 'Crescent Wrench', 5, 20);
let saw = createProduct(2, 'Saw', 10, 25);

saw.describe();
scissors.describe();
