// optional properties
{
  interface UserInfo {
    name: string;
    email?: string;
    age?: number;
  }

  // implement the following:

  function displayUserInfo(userInfo: UserInfo): string {
    return `Name: ${userInfo.name}; Email: ${userInfo?.email ? userInfo.email : "N/A"}; Age: ${userInfo?.age ? userInfo.age : "unknown"}`
  }

  console.log(displayUserInfo({name: 'James'}));
  console.log(displayUserInfo({name: 'James', email: 'j@j.com'}));
}