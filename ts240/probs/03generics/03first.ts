function firstElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  else return arr[0];
}