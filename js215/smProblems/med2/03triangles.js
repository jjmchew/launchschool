/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

Examples:
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

*/

/*
elapsed:  10.5 mins



input
- 3 numbers : each representing angles of a triangle

output
- string: 'acute', 'right', 'obtuse', or 'invalid'

rules
- valid triangle:
    - sum of angles is 180 deg
    - every angle must be greater than 0
- right:
    - 1 angle is 90 deg
- acute:
    - all angles less than 90 deg
- obtuse:
    - 1 angle is > 90 deg
- angles are given in deg

approach
- take in arguments as an array
- check for invalid triangle first (helper function)
- then check for right
- then check for  acute
- then check for obtuse

*/

console.log(triangle(60, 70, 50) === "acute");
console.log(triangle(30, 90, 60) === "right");
console.log(triangle(120, 50, 10) ==="obtuse");
console.log(triangle(0, 90, 90) === "invalid");
console.log(triangle(50, 50, 50) === "invalid");

function triangle(...angles) {
  let isValidTriangle = angles => {
    if (!angles.every(angle => angle > 0)) return false;
    if (angles.reduce((sum, angle) => sum + angle) !== 180) return false;
    return true;
  };
  if (!isValidTriangle(angles)) return 'invalid';
  if (angles.some(angle => angle === 90)) return 'right';
  else if (angles.every(angle => angle < 90)) return 'acute';
  else if (angles.some(angle => angle > 90)) return 'obtuse';
}