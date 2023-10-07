/*
https://www.codewars.com/kata/54bb6ee72c4715684d0008f9

Task

Return the sum of the multiples of 3 and 5 below a number. Being the galactic games, the tracks can get rather large, so your solution should work for really large numbers (greater than 1,000,000).
Examples

solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18

*/

/*
pattern of differences for the next number in sequence is:
diff = [3, 2, 1, 3, 1, 2, 3]

approach
- create an 'index' counter
- create a 'sum' counter
- create a 'num' counter
  - nums are created by adding the next diff[i % 7] to 'num'
  - sum is the sum += num
  - then increment i += 1

*/
// the final accepted solution - using mathematical formula for sum of multiples from n to 'last multiple'
function solution(number) {
  let sumFactors = (n, last) => (last / n / 2) * (n + last);
  let findLast = (number, n) => {
    let count = number - 1;
    while (count % n !== 0) {
      count -= 1;
    }
    return count;
  }
  let output = sumFactors(3, findLast(number, 3)) + sumFactors(5, findLast(number, 5)) - sumFactors(15, findLast(number, 15));
  // let output = sumFactors(5, findLast(number, 5));
  console.log(output);
  return output;
}

function solution3(maxNum) {
  const diff = [3n, 2n, 1n, 3n, 1n, 2n, 3n];
  let index = 0n;
  let sum = 0n;
  let num = 0n;
  while (num < maxNum) {
    num += diff[index % 7n];
    if (num >= maxNum) break;
    sum += num;
    index += 1n;
  }
  console.log(sum);
  return sum;
}


function solution2(num) {
  let nums = [];
  let sums = [];

  for (let i = 0; i < num; i += 1){ 
    if (i % 3 === 0 || i % 5 === 0) {
      nums.push(i);
      sums.push(nums.reduce((sum, num) => sum + num));
    }
  }

  // console.log('differences');
  // console.log(sums);
  // for (let i = nums.length - 1; i > 0; i -= 1) {
  //   console.log(nums[i] - nums[i - 1]);
  // }
  console.log(nums);
  console.log(sums);
  return(nums);
}

solution(50);
// solution2(50);
// solution2(5000000);