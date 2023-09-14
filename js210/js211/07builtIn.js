let arr = [1, 2];
arr.length = 5;
arr[-3] = 'a';

console.log(arr);

let newArr = arr.map(ele => 'changed');
console.log('newArr: ', newArr, newArr.length);
console.log('forEach: ');
arr.forEach(ele => console.log(ele));
console.log('arr: ', arr);

console.log('==============');
console.log('Object.keys: ', Object.keys(arr));

console.log('==============');
for (let key in arr) {
  console.log('for..in key: ',key, arr[key]);
}

console.log('==============');
for (let value of arr) {
  console.log('for..of value: ',value);
}
