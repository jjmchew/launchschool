// generic constraints
{
  function getProperty<T>(obj: T, key: keyof T): void {
    console.log(obj[key]);
  }

  getProperty({ name: 'jim', age: 34}, 'name');
  // getProperty({ name: 'jim', age: 34, height: 182}, 'email');
}