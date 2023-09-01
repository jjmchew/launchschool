function multisum(num) {
  let multiples = function multiples(num) {
    arr = [];
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 || i % 5 === 0) arr.push(i);
    }
    return arr;
  };

  return multiples(num).reduce((sum, value) => sum + value, 0);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
