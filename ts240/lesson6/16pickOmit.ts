// pick and omit
{
  // given
  // interface User {
  //   name: string;
  //   email: string;
  //   age: number;
  // }
  
  // type NameOnly = Pick<User, "name1">;
  // type WithoutName = Omit<User, "name1">;


  // errors: given keys are not defined within `User`
  //  Note:  omit a key which does not exist does NOT raise a compile error
}