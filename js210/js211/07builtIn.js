let arr = [1, 2];
arr.length = 5;
arr[-3] = 'a';

console.log(arr);

let newArr = arr.map(ele => 'changed');
console.log('map: ', newArr, newArr.length);
console.log('forEach: ', arr.forEach(ele => console.log(ele)));
