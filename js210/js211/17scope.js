function hello() {
  function hi() {
    console.log(a);
  }

  function howdy() {
    let a = 'pizza';
    console.log(a);
  }

  howdy(); // move this around
  hi(); // move this around
  // let a = 'a';
  // console.log(a);
}
hello();
// console.log(a);