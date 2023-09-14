let obj = { a: 1, b: 2};
let newObj = Object.create(obj);
newObj['c'] = 3;

console.log('obj: ', obj);
console.log('newObj: ', newObj);

console.log('obj keys', Object.keys(obj));
console.log('newObj keys', Object.keys(newObj));

console.log('===========');
for (let key in obj) {
  console.log('for in obj: ', key, obj[key]);
}

console.log('===========');
for (let key in newObj) {
  console.log('for in newObj: ', key, newObj[key]);
}

// obj.forEach(ele => console.log(ele)); // not possible
// also not possible
// for (let value of newObj) {
//   console.log('for of newObj: ', value);
// }