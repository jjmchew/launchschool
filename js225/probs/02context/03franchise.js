const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let func = (function(number) {
      return `${this.name} ${number}`;
    }).bind(this);

    return [1, 2, 3].map(func);
  },
};

console.log(franchise.allMovies());