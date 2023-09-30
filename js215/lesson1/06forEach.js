function myForEach(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    func(array[i]);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3

let max = -Infinity;
function getMinMax(value) {
  if (value > max) max = value;
  if (value < min) min = value;
}

myForEach([4, 5, 12, 23, 3], getMinMax);
console.log(min, max);