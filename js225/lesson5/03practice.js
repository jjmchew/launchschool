// Problem 1
/*
Disadvantages to working with factory functions:
- there can be redundant code (methods) - a full copy is made of each object
- no way to know how an object was made after it has been created

*/



// Problem 2
// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }



// Problem 3
function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: { phone: 0, internet: 0, amount: 0 },
    total () {
      return this.phone + this.internet;
    },
    addPayment (payment) {
      if (payment.phone) this.payments.phone += payment.phone;
      if (payment.internet) this.payments.internet += payment.internet;
      let paymentAmount = payment.total() - (payment.phone || 0) - (payment.internet || 0);
      if (paymentAmount > 0) this.payments.amount += paymentAmount;
    },
    addPayments (payments) {
      payments.forEach(payment => this.addPayment(payment));
    },
    amountDue () {
      let due = this.total() - this.payments.phone - this.payments.internet - this.payments.amount;
      return due;
    }
  };
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000



// Problem 4
function createPayment(services = {}) {
  let payment = {};
  let amount = 0;
  if (services.amount) {
    amount = services.amount;
  }
  if (services.phone) {
    payment.phone = services.phone;
    amount += services.phone;
  }
  if (services.internet) {
    payment.internet = services.internet;
    amount += services.internet;
  }
  payment.total = function() { return amount; };
  return payment;
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000




// Problem 5
let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.payments);
console.log(invoice.amountDue());       // this should return 0