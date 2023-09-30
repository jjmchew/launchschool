const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true

function isItemAvailable(inputId, transactions) {
  let filtered = transactionsFor(inputId, transactions);
  let total = filtered.reduce((total, obj) => {
    if (obj.movement === 'in') total += obj.quantity;
    else if (obj.movement === 'out') total -= obj.quantity;
    return total;
  }, 0);
  console.log(total);
  return total > 0;
}


function transactionsFor(inputId, transactions) {
  let output = [...transactions].filter(obj => obj.id === inputId);
  console.log(output);
  return output;
}