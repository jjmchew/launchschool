// https://launchschool.com/exercises/19cc5636

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     // return [1, 2, 3].map(function(number) { // original line
//     return [1, 2, 3].map(number => {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies());

// the anonymous function passed to `map` has `this` set to the global object
// hence, `this.name` will be `undefined` and the function will not return the desired titles

// to use lexical scoping, an arrow function is the easiest solution

// #region alternate solution - using variable scoping rules (depending on lexical scoping)
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());
// #endregion
