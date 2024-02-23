function wrapInArray<T>(param: T): T[] {
  return [param];
}

console.log(wrapInArray<string>('hello'));
console.log(wrapInArray<number>(100));
