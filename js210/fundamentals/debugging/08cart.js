// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
const prices = {
  'notebook': 9.99,
  'pencil': 1.70,
  'coffee': 3.00,
  'smoothie': 2.10,
};

function price({name}) {
  return prices[name];
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount) {
  amount = amount || 1;

  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  let total = 0;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    total += (item.amount * price(item));
  }

  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log(`You have been charged $${total()}.`);
}

function checkout() {
  pay();
  shoppingCart = [];
}

// Example purchase.

updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);
// "Oh, wait, I do have pencils..."
updateCart('pencil', 0);

checkout();
// You have been charged $14.69.


/*
The unexpected total is the result of being charged for 1 notebook, 1 pencil and 1 coffee.
This happens since the default quantity of `1` is assigned whenver a quantity of `0` (a falsy value in JavaScript) is passed in to the parameter 'amount'. Thus, on line 70, when the cart is updated for the item 'pencil', the quantity is updated to `1`, rather than `0`.
Updating the guard clause to explicity look for `undefined` may be a better approach.  Alternatively, updating with a quantity of `0` could result in the item being removed from the `shoppingCart` entirely.
*/
