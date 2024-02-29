// https://launchschool.com/lessons/18156389/assignments/f0138b31

{
  // rewrite to make type-safe

  // function getProperty(obj, key) {
  //   return obj[key];
  // }
}

{
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  let val1: string = getProperty({ name: 'john'}, 'name');
  let val2: number = getProperty({ name: 'john', age: 34 }, 'age');
}