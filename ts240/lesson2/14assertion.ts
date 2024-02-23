// type assertions
{
  // no errors
  // value of `age` after line 2 will be `2`

  let age: number | string = "30";
  age = (age as string).length;
}