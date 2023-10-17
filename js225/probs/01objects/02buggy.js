const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    // this.price -= discount; // this.price is being reset, but the desired behaviour seems to be that this.price doesn't change
    const newPrice = this.price - discount;

    // return this.price;
    return newPrice;
  },
};

console.log(item.discount(20));   // should return 40
// returns 40
console.log(item.discount(50));   // should return 25
// returns 20
console.log(item.discount(25));   // should return 37.5
// returns 15