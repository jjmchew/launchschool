{
  // provided function definition
  // function myFunc({}: string[]): number {
  //   return;
  // }

  // applying destructuring
  function myFunc({ length }: string[]): number {
    return length;
  }
}