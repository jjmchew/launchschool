let numbers = [1, 3, 5, 6, 2, 3, 4, 5, 6, 3, 7, 2, 3, 4, 1, 2, 3, 2];

const uniq = new Set(numbers);
console.log(uniq, uniq.size);

const uniqArray = [...uniq].sort();
console.log(uniqArray, uniqArray.length);

