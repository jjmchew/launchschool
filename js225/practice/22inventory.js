const ItemCreator = (function ItemCreator() {
  function isInvalidName(itemName) {
    if (itemName.length < 5) return true;
    else return false;
  }
  function isInvalidCategory(category) {
    if (/\s+/g.test(category) || category.length < 5) return true;
    else return false;
  }
  function makeSkuCode(name, cat) {
    name = name.replace(/\s+/g, '');
    return name.slice(0, 3).toUpperCase() + cat.slice(0, 2).toUpperCase();
  }

  return function Item(itemName, category, quantity) { // named function can serve as object "type"
    if (isInvalidName(itemName) || isInvalidCategory(category) || typeof quantity !== 'number') return { notValid: true };
    
    this.skuCode = makeSkuCode(itemName, category);
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    return this;
  };
})();

// #region LS solution (ItemCreator)
// const ItemCreator = (() => {
//   function generateSkuCode(itemName, category) {
//     return (itemName.replace(/\s/g, '').slice(0, 3).toUpperCase() +
//             category.replace(/\s/g, '').slice(0, 2).toUpperCase());
//   }

//   function isValidItemName(itemName) {
//     return itemName.replace(/\s/g, '').length >= 5;
//   }

//   function isValidCategory(category) {
//     return category.replace(/\s/g, '').length >= 5 && category.split(' ').length === 1;
//   }

//   function isQuantityProvided(quantity) {
//     return quantity !== undefined
//   }

//   return function(itemName, category, quantity) {
//     if (isValidItemName(itemName) && isValidCategory(category) && isQuantityProvided(quantity)) {
//       this.skuCode = generateSkuCode(itemName, category);
//       this.itemName = itemName;
//       this.category = category;
//       this.quantity = quantity;
//     } else {
//       return { notValid: true };
//     }
//   };
// })();
// #endregion


const ItemManager = (function ItemManager() {
  let savedItems = [];
  
  return {
    items: savedItems,
    getItem(skuCode) {
      return savedItems.filter(item => item.skuCode === skuCode)[0];
    },
    create(name, category, quantity) {
      let newItem = new ItemCreator(name, category, quantity);
      if (!newItem.notValid) {
        savedItems.push(newItem);
        return newItem;
      } else return false;
    },
    update(skuCode, newInfo) {
      let item = this.getItem(skuCode);
      if (!item) return false;

      Object.assign(item, newInfo);
      return true;
    },
    delete(skuCode) {
      if (!this.getItem(skuCode)) return false;

      savedItems = savedItems.filter(item => item.skuCode !== skuCode);
      this.items = savedItems;
      return true;
    },
    inStock() {
      return savedItems.filter(item => item.quantity > 0);
    },
    itemsInCategory(category) {
      return savedItems.filter(item => item.category === category);
    },
  };
})();

const ReportManager = (function ReportsManager() {
  return {
    init(ItemManager) {
      this.items = ItemManager;
    },
    reportInStock() {
      console.log(this.items.inStock().map(item => item.itemName).join(', '));
    },
    createReporter(skuCode) {
      let item = this.items.getItem(skuCode);
      return {
        itemInfo() {
          Object.keys(item).forEach(key => console.log(`${key}: ${item[key]}`));
        }
      }
    }
  }
})();

// #region old test code for ItemCreator alone
// console.log(ItemCreator('basket ball', 'sports', 0));           // valid item
// console.log(ItemCreator('asd', 'sports', 0));
// console.log(ItemCreator('soccer ball', 'sports', 5));           // valid item
// console.log(ItemCreator('football', 'sports'));
// console.log(ItemCreator('football', 'sports', 3));              // valid item
// console.log(ItemCreator('kitchen pot', 'cooking items', 0));
// console.log(ItemCreator('kitchen pot', 'cooking', 3));          // valid item
// #endregion


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
console.log(ItemManager.items[0].constructor);
ReportManager.init(ItemManager);
ReportManager.reportInStock();

console.log(ItemManager.update('SOCSP', { quantity: 0 }));
console.log(ItemManager.update('SOCSX', { quantity: 0 }));
console.log(ItemManager.inStock());

ReportManager.reportInStock();

console.log(ItemManager.itemsInCategory('sports'));

console.log(ItemManager.delete('SOCSP'));
console.log(ItemManager.items);

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();