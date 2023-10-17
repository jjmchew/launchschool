'use strict';

let invoices = {
  unpaid: [],
  paid: [],
  add: function(clientName, owed) {
    this.unpaid.push({name: clientName, amount: owed});
  },
  totalDue: function() {
    return this.unpaid.reduce((sum, obj) => {
      return sum + obj.amount;
    }, 0);
  },
  totalPaid: function() {
    return this.paid.reduce((sum, obj) => {
      return sum + obj.amount;
    }, 0);
  },
  payInvoice: function(clientName) {
    let temp = [];
    for (let i = 0; i < this.unpaid.length; i += 1) {
      if (this.unpaid[i].name === clientName) {
        this.paid.push(this.unpaid[i]);
      } else temp.push(this.unpaid[i]);
    }
    this.unpaid = temp;
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());