// keyof
{
  interface UserData {
    name: string,
    age: number,
  }
  
  type UserDataProp = keyof UserData;

  function getProp(data: UserData, key: UserDataProp): void {
    console.log(data[key]);
  }

  const user: UserData = {
    name: 'joe',
    age: 34,
  };

  getProp(user, 'age');
}

