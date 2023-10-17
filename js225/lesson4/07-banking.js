'use strict';

function makeAccount(number) {
  let balance = 0;
  let acctTransactions = [];
  return {
    number () {
      return number;
    },
    balance () {
      return balance;
    },
    transactions () {
      return acctTransactions;
    },
    deposit (amount) {
      balance += amount;
      this.transactions().push({type: 'deposit', amount});
      return amount;
    },
    withdraw (amount) {
      if (amount > this.balance()) amount = this.balance();
  
      this.transactions().push({type: 'withdraw', amount});
      balance -= amount;
      return amount;
    },
  };
}

function makeBank() {
  let id = 101;
  let accounts = [];
  return {
    openAccount () {
      let newAccount = makeAccount(id);
      id += 1;

      accounts.push(newAccount);
      return newAccount;
    },
    transfer(source, destination, amount) {
      amount = source.withdraw(amount);
      destination.deposit(amount);
      return amount;
    },
  };
}

// #region Problem 1 - 5
// let account = makeAccount();
// let otherAccount = makeAccount();

// console.log(account.balance);
// // 0
// console.log(account.deposit(12));
// // 12
// console.log(account.balance);
// // 12
// console.log(account.deposit(10));
// // 10
// console.log(account.balance);
// // 22
// account.deposit(78);

// console.log(account.balance);
// // 100
// console.log(account.withdraw(19));
// // 19
// console.log(account.balance);
// // 81

// console.log(account.balance);
// // 81
// console.log(account.withdraw(91));
// // 81
// console.log(account.balance);
// // 0

// console.log(account.deposit(23));
// // 23
// console.log(account.transactions);
// // [{...}]
// console.log(account.transactions[0]);
// // {type: "deposit", amount: 23}

// console.log(account.balance);
// console.log(otherAccount.balance);
// #endregion

// #region Problems 6, 7
// let bank = makeBank();
// console.log(bank.accounts);

// let account = bank.openAccount();
// console.log(account.number);
// // 101
// console.log(bank.accounts);
// // [{...}]
// console.log(bank.accounts[0]);
// // {
// //  number: 101,
// //  balance: 0,
// //  transactions: [],
// //  deposit: [Function: deposit],
// //  withdraw: [Function: withdraw]
// // }
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // 102
// #endregion

// #region Problem 8
// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // 7
// console.log(source.balance);
// // 3
// console.log(destination.balance);
// // 7
// #endregion

// #region Problem 9
// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.balance());
// // 0
// console.log(account.deposit(17));
// // 17
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number());
// // 102
// console.log(account.transactions());
// // [{...}]
// #endregion

// #region Problem 10
let bank = makeBank();
console.log(bank.accounts);
// undefined
