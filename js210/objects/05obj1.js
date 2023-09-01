const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);  // 'a'
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c', 'f', '-1': 'd', 'e': 5 ]

/*
Arrays are objects and can store non-index elements with keys such as '-1', 'e'.
Any numeric keys are treated and displayed as array elements (such as the index 3) which is added
*/
