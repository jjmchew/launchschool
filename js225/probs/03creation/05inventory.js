// #region short PEDAC
/*
ItemManager (an object)
- create(name, category, quantity)
- update(sku, newInfo)
- delete(sku)
- items() : list all items
- inStock() : lists items with quantity > 0
- itemsInCategory(category) : lists all items for given category

ReportManager
- init(itemManager) : assigns itemManager to `items`
- createReporter(sku) : returns { itemInfo() }
                      : itemInfo : logs key:value pairs for returned SKU
- reportInStock() : logs item names as comma separated values

name:
- minimum 5 chars (don't count spaces)

category:
- min 5 chars
- only 1 word (no spaces)

quantity:
- non-blank

sku:
- 5 chars total (all caps)
- 3 chars : first 3 chars from name (ignore space)
- 2 chars : first 2 chars of category
- non-unique
*/
// #endregion

function Item(name, category, quantity) {
  let noSpace = string => string.replace(/\s/g, '');

  function isNameValid(name) {
    return noSpace(name).length >= 5;
  }

  function isCategoryValid(category) {
    return noSpace(category) === category && category.length >= 5;
  }

  function makeSku() {
    let namePart = noSpace(name).slice(0,3).toUpperCase();
    let catPart = category.slice(0, 2).toUpperCase();
    return namePart + catPart;
  }
  if (isNameValid(name) && isCategoryValid(category) && quantity !== undefined) {
    this.sku = makeSku();
    this.name = name;
    this.category = category;
    this.quantity = quantity;
  } else {
    this.notValid = true;
  }
}

Item.prototype = Object.getPrototypeOf({});

// #region Item test cases
// console.log(new Item('abc', 'sports', 3).notValid === true); // true
// console.log(new Item('basketball', 'sp orts', 3).notValid === true); // true
// console.log(new Item('basketball', 'sports').notValid === true); // true
// console.log(new Item('basketball', 'sps', 3).notValid === true); // true
// console.log(new Item('basketball', 'sports', 3).sku === 'BASSP'); // true
// console.log(new Item('soccer ball', 'sports', 5).sku === 'SOCSP'); // true
// console.log(new Item('kitchen pot', 'cooking', 3).sku === 'KITCO'); // true
// console.log(new Item('a spoon', 'cooking', 3).sku === 'ASPCO'); // true
// let item1 = new Item('basketball', 'sports', 3);
// console.log(item1);
// console.log(Object.getPrototypeOf(item1));
// #endregion


const ItemManager = {
  items: [],
  create(name, category, quantity) {
    let newItem = new Item(name, category, quantity);
    if (newItem.notValid) return false;

    this.items.push(newItem);
    return newItem;
  },
  update(sku, newInfo) {
    let item = this.items.filter(item => item.sku === sku);
    if (item.length === 0) return false;
    Object.keys(newInfo).forEach(key => item[0][key] = newInfo[key]);
    return true;
  },
  delete(sku) {
    let index = this.items.map(item => item.sku).indexOf(sku);
    this.items.splice(index, 1);
  },
  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },
  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },
};

const ReportManager = {
  items: null,
  init(itemManager) {
    this.items = itemManager.items;
  },
  reportInStock() {
    console.log(
      this.items.map(item => {
        if (item.quantity > 0) return item.name;
        else return 'OUT OF STOCK';
      }).filter(ele => ele !== 'OUT OF STOCK').join(',')
    );
  },
  createReporter(sku) {
    let item = this.items.filter(item => item.sku === sku)[0];
    return {
      item,
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        })
      },
    };
  },
};

// test code provided
ItemManager.create('basket ball', 'sports', 0);           // valid item
console.log(ItemManager.create('asd', 'sports', 0) === false); 
ItemManager.create('soccer ball', 'sports', 5);           // valid item
console.log(ItemManager.create('football', 'sports') === false);
ItemManager.create('football', 'sports', 3);              // valid item
console.log(ItemManager.create('kitchen pot', 'cooking items', 0) === false);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
