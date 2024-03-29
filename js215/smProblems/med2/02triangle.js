/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Examples:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

*/

/*
elapsed:  15 mins;


input
- 3 integers : represent length of sides of a triangle

output
- string : 'equilateral', 'isosceles', 'scalene', or 'invalid'

rules
- equilateral triangles:  all sides are the same length
- isosceles triangle:  only 2 sides are the same length
                       AND valid triangle
- scalene triangle: all sides are different lengths
                    AND valid triangle

- valid triangle:
  - sum of the lengths of the 2 shortest sides must be greater than length of the longest side
  - all sides are greater than 0

approach
- check for valid triangle first (helper function)

- check for equilateral triangle
- check for isosceles
- if neither of the above, must be scalene

*/

console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5) === "scalene");
console.log(triangle(0, 3, 3) === "invalid");
console.log(triangle(3, 1, 1) === "invalid");

function triangle(...sides) {
  let isValidTriangle = sides => {
    if (sides.some(side => side === 0)) return false;
    sides.sort((a, b) => a - b);
    return sides[0] + sides[1] > sides[2];
  };
  let isIsosceles = sides => {
    if (sides[1] === sides[0] || sides[1] === sides[2]) return true;
    return false;
  };
  if (!isValidTriangle(sides)) return 'invalid';
  else if (sides.every(side => side === sides[0])) return 'equilateral';
  else if (isIsosceles(sides)) return 'isosceles';
  else return 'scalene';
}

// version1
// function triangle(...sides) {
//   let isValidTriangle = sides => {
//     if (sides.some(side => side === 0)) return false;
//     sides.sort((a, b) => a - b);
//     return sides[0] + sides[1] > sides[2];
//   };
//   let isIsosceles = sides => {
//     let count = {};
//     sides.forEach(side => {
//       count[side] = count[side] || 0
//       count[side] += 1;
//     });
//     let countArray = Object.values(count).sort((a, b) => a - b);
//     if (countArray[0] === 1 && countArray[1] === 2) return true;
//     else return false;
//   };
//   if (!isValidTriangle(sides)) return 'invalid';
//   else if (sides.every(side => side === sides[0])) return 'equilateral';
//   else if (isIsosceles(sides)) return 'isosceles';
//   else return 'scalene';
// }

