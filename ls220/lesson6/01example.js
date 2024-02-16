// Create a function to estimate population of species
//  start from a number and count down to 0

// #region Version 1 - naive
// function populationCount(number) {
//   for (let i = number; i >= 0; i -= 1) {
//     console.log(i);
//   }
// }
// #endregion

// #region Version 2 - using recursion
function populationCount(number) {
  if (number < 0) return;
  console.log(number)
  populationCount(number - 1);
}
// #endregion

populationCount(4);