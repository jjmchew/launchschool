// https://launchschool.com/exercises/9a411b61

/*
A robot factory's test facility needs a program to verify robot movements.

The robots have three possible movements:

turn right
turn left
advance
Robots are placed on a hypothetical infinite grid,
facing a particular direction (north, east, south, or west)
at a set of {x,y} coordinates,
e.g., {3,8} with coordinates increasing to the north and east.

The robot then receives a number of instructions,
at which point the testing facility verifies the robot's new position,
and in which direction it is pointing.

The letter-string "RAALAL" means:
Turn right
Advance twice
Turn left
Advance once
Turn left yet again
Say a robot starts at {7, 3} facing north.
Then running this stream of instructions should leave it at {9, 4} facing west.
*/

/*
input
- position:  coordinates X, Y, direction (N, E, S, or W)
- instruction string (string of 'R', 'L', 'A' only)

output
- position:  coordinates X, Y, direction (N, E, S, or W)

rules
- instructions
  - R : rotate 90 deg to R (e.g., N to E)
  - L : rotate 90 deg to L (e.g., N to W)
  - A : move +x, -x, +y, -y by 1 coordinate
- coordinates
  - N : +y
  - E : +x
  - S : -y
  - W : -x
- no input validation

data structure
- instructions - need

approach
- initialize array to track various positions after instructions 'positions'
- iterate through instructions letter by letter
  - look-up and execute instruction based upon position (coord / NESW)
  - add new position to 'positions'

  - return final position in 'positions'
*/

let robotTester = function robotTester(position, instructions) {
  let positions = [position];

  let advance = (lastPosition) => {
    let moves = {
      N: [0, 1],
      E: [1, 0],
      S: [0, -1],
      W: [-1, 0],
    };
    let delta = moves[lastPosition[2]];
    return [
      lastPosition[0] + delta[0],
      lastPosition[1] + delta[1],
      lastPosition[2]
    ];
  };
  let turn = (instruction, lastPosition) => {
    let DIRECTIONS = 'WNESW';
    let index = DIRECTIONS.lastIndexOf(lastPosition[2]);

    if (instruction === 'L') index -= 1;
    else if (instruction === 'R') index += 1;

    index %= 4;
    return [lastPosition[0], lastPosition[1], DIRECTIONS[index]];
  };
  let execute = (instruction, lastPosition) => {
    let newPosition;

    switch (instruction) {
      case 'A':
        newPosition = advance(lastPosition);
        break;
      case 'L':
      case 'R':
        newPosition = turn(instruction, lastPosition);
        break;
    }

    return newPosition;
  };

  instructions.split('').forEach(instruction => {
    let lastPosition = positions[positions.length - 1];
    let newPosition = execute(instruction, lastPosition);
    positions.push(newPosition);
  });

  return positions[positions.length - 1];
};


console.log(robotTester([7, 3, 'N'], "RAALAL").toString()  === [9, 4, 'W'].toString());
/*
position  instruction  after-position
[7,3,N]         R       [7,3,E] (R-turn N>E)
[7,3,E]         A       [8,3,E] (+x)
[8,3,E]         A       [9,3,E] (+x)
[9,3,E]         L       [9,3,N] (L-turn E>N)
[9,3,N]         A       [9,4,N] (+y)
[9,4,N]         L       [9,4,W] (L-turn N>W)
*/
console.log(robotTester([0, 0, 'E'], "ARARRRR").toString() === [1, -1, 'S'].toString()); //true
console.log(robotTester([0, 0, 'E'], "ARARR").toString() === [1, -1, 'N'].toString()); //true

console.log(robotTester([7,3,'N'],'A').toString() === [7,4,'N'].toString());
console.log(robotTester([7,3,'E'],'A').toString() === [8,3,'E'].toString());
console.log(robotTester([7,3,'S'],'A').toString() === [7,2,'S'].toString());
console.log(robotTester([7,3,'W'],'A').toString() === [6,3,'W'].toString());

console.log(robotTester([7,3,'N'],'L').toString() === [7,3,'W'].toString());
console.log(robotTester([7,3,'N'],'R').toString() === [7,3,'E'].toString());
console.log(robotTester([7,3,'E'],'L').toString() === [7,3,'N'].toString());
console.log(robotTester([7,3,'E'],'R').toString() === [7,3,'S'].toString());
console.log(robotTester([7,3,'S'],'L').toString() === [7,3,'E'].toString());
console.log(robotTester([7,3,'S'],'R').toString() === [7,3,'W'].toString());
console.log(robotTester([7,3,'W'],'L').toString() === [7,3,'S'].toString());
console.log(robotTester([7,3,'W'],'R').toString() === [7,3,'N'].toString());

