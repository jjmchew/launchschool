// https://launchschool.com/exercises/665c9230

{
  // Create a type representing all property names of the existing interface UserData. Then write a function that takes a UserData object and a key from UserData, and prints out the value of that key from the object.

  // Expected outcome:

  // The function should be able to take any key of UserData and print out the corresponding value.
}

{
  interface UserData {
    name: string,
    email: string,
    id: number,
    age: number,
    hasKids: boolean,
  }

  type UserDataKeys = keyof UserData;

  function getProperty(user: UserData, key: UserDataKeys): UserData[UserDataKeys] {
    return user[key];
  }

  let user: UserData = {
    name: 'john',
    email: 'j@j.com',
    id: 928398,
    age: 33,
    hasKids: false,
  };

  console.log(getProperty(user, 'age'));
  console.log(getProperty(user, 'hasKids'));

}