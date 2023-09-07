const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty item> ]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', <2 empty items> ]
console.log(languages.length); // 3

languages.length = 1; // ['JavaScript']
languages[2] = 'Python';
console.log(languages); // ['JavaScript', <1 empty item>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

/*
The `length` property of arrays reflects 1 more than the greatest integer index of elements within the array.
When `length` is assigned a value more than 1 larger than the largest ineteger index in the array, 'empty' array slots are created.
When `length` is assigned a value less than 1 more than the largest integer index in the array, the 'extra' array elements are lost.
*/
