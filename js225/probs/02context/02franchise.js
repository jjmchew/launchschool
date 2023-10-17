// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies());

// desired output:
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

/*
actual output returns an array ['undefined 1', 'undefined 2', 'undefined 3'] since the nested anonymous function
passed to `map` is executed with global context where `name` is undefined

fix: needs to pass the correct context to the callback function in `map`, which will the `this` which is the object
`franchise`

** WARNING ** : although my solution works, it does NOT really take into account lexical scoping

*/

// fix
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }, this);
  },
};

console.log(franchise.allMovies());