/*
You have a bank of switches before you, numbered from 1 to n.
Every switch is connected to exactly one light that is initially off.
You walk down the row of switches and toggle every one of them.
You walk back to the beginning of the row and start another pass.
On this second pass, you toggle switches 2, 4, 6, and so on.
On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. 
You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument — the total number of switches -
and returns an array of the lights that are on after n repetitions.
*/

/*
elapsed:  ~22 minutes


input
- integer 'switches' : # of switches AND # of passes

output
- array of n : each element represents a light that is ON

rules
- pass 1: toggle every 1 
- pass 2: toggle every 2 starting with 2 (indexes 1, 3, 5, 7, ...) (-1)
- pass 3: toggle every 3 starting with 3 (indexes 2, 5, 8, ...) (-1)
- assume no data validation
- assume if n = 0 then return empty array (no lights are on)

data
- array of boolean
  - true for on
  - false for off

approach
- initialize array of lights based on 'switches'
    - create an empty array
    - iterate through 'switches' number of times
    - push 'false' (initially off)
- iterate through array 'switches' # of times 'pass'
  - iterate through each light 'i'
    - if the index # is evenly divisible by itself, then 
      - toggle each light, as required (flip boolean)
- transform lights array to indicate lights that are on  
  - iterate through lights array
    - if 'true', then return index + 1
  - filter out false
- return array


notes
index 0 1 2 3 4 5 6 7 ...
pass
  1   Y Y Y Y Y Y ...
  2   N Y N Y ...
*/

function lightsOn(switches) {
  let initializeLights = (switches) => {
    let lights = [];
    for (let i = 0; i < switches; i += 1) {
      lights.push(false);
    }
    return lights;
  }
  let toggle = (value) => !value;

  let lights = initializeLights(switches);
  for (let pass = 1; pass <= switches; pass += 1) {
    for (let i = 0; i < switches; i += 1) {
      if ((i + 1) % pass === 0) lights[i] = toggle(lights[i]);
    }
  }

  lights = lights.map((bool, index) => bool ? index + 1 : bool).filter(element => element);
  console.log(lights);
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]