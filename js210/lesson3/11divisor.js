// Version1
/*
function gcd(...nums) {
  nums.sort((a, b) => a - b);

  for (let num = nums[0]; num >= 1; num--) {
    if (nums[0] % num === 0 && nums[1] % num === 0) return num;
  }

  return "no gcd";
}
*/

// Euclidean algorithm
function gcd(...nums) {
  nums.sort((a,b) => a - b);
  num1 = nums[0];
  num2 = nums[1]
  do {
    num2 = num2 % num1;
    if (num2 !== 0) num1 = num2;
  } while (num2 !== 0);
  return num1;
}

console.log(gcd(4, 12));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
console.log(gcd(12, gcd(4, 8)));
console.log(gcd(gcd(12, 4), 8));
