// generic constraints
{
  // given
  // function getProperty(obj, key) {
  //   return obj[key];
  // }

  // re-implement with generic constraints
  interface CustomObj {
    name: string,
    age: number,
  }

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const obj: CustomObj = {
    name: 'james',
    age: 34,
  };

  const x1 = getProperty(obj, 'name');  // note syntax, don't need to pass in T, K when using function since types are defined in/as CustomObj
  const x2 = getProperty(obj, 'age');
  // const x3 = getProperty(obj, 'occupation'); // not allowed - key not defined in CustomObj
}