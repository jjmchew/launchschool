// Version 1
 function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

// Version 2
function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

/*
Both Version 1 and Version 2 will not process 'missing' arguments correctly.
i.e.,if 3 arguments (of the 5 defined parameters) are passed to the function `processOrder` the function will assign values to each of the parameters sequentially, which may not be what was specifically intended.
e.g., `processOrder(100, 0.2, 0.18)` may have been intended to pass the value `100` as `price`, `0.2` as `discount`, and `0.18` as tax. However, JS would assign `100` as `price`, `0.2` as quantity, `0.18` as `discount`.

** EXTENSION!! **
If `0` is passed as an argument for any of the supplied values, the program will re-assign the default value since `0` evaluates as falsey in JS.
Explicitly testing for `undefined` will better determine if default values should be applied.
*/
