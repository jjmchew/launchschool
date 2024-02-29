// Practice Problem 2

// create an interface for "ApiData" to accommodate future additional key-value pairs
// add type annotations where missing
// update the function getUser and associated code below with type annotations and to explicitly handle non-existant ids (return null)


{
  // interface UserData {
  //   name: string,
  //   id: number,
  // }
  
  // function getUser(data: unknown, id: number): UserData {
  //   let idx = data.users.findIndex(obj => obj.id === id);
  //   return data.users[idx];
  // }
  
  // function getApiData() {
  //   return {
  //     status: 'success',
  //     users: [
  //       {name: 'john', id: 2},
  //       {name: 'mike', id: 4},
  //     ],
  //   }
  // }
  
  // const data = getApiData();
  
  // const user2: UserData = getUser(data, 2);
  // console.log(user2); // {name: 'john', id: 2}
}



// my answer

{

  interface UserData {
    name: string,
    id: number,
  }
  
  interface ApiData {
    status: string,
    users: UserData[],
    [key: string]: unknown,
  }

  function getApiData(): ApiData {
    return {
      status: 'success',
      users: [
        {name: 'john', id: 2},
        {name: 'mike', id: 4},
      ],
      time: '12:92',
    }
  }

  function getUser(data: ApiData, id: number): UserData | null {
    let idx: number = data.users.findIndex(obj => obj.id === id);
    const element = data.users[idx];
    if (element) {
      return element;
    } else return null;
  }

  const data: ApiData = getApiData();
  
  let user2: UserData | null = getUser(data, 2);

  console.log(user2); // {name: 'john', id: 2}

}

