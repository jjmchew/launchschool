// Problem 1
// function makeList() {
  
//   return {
//     items: [],
//     add (item) {
//       this.items.push(item);
//       console.log(`${item} added!`);
//     },
//     list () {
//       if (this.items.length === 0) console.log('The list is empty.');
//       else this.items.forEach(item => console.log(item));
//     },
//     remove (item) {
//       let index = this.items.indexOf(item);
//       if (index === -1) console.log(`${item} not found!`);
//       else {
//         this.items.splice(index, 1);
//         console.log(`${item} removed!`);
//       }
//     },
//   }
// }

// Problem 2
function makeList() {
  let items = [];
  return {
    add (item) {
      items.push(item);
      console.log(`${item} added!`);
    },
    list () {
      if (items.length === 0) console.log('The list is empty.');
      else items.forEach(item => console.log(item));
    },
    remove (item) {
      let index = items.indexOf(item);
      if (index === -1) console.log(`${item} not found!`);
      else {
        items.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },
  }
}


let list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn