function filterByType<T>(arr: Array<any>, type: string): T[] {
  return arr.filter(element => typeof element === type);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));