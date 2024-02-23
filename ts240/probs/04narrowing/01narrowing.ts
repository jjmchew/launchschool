function printLength(param: string | string[]): string {
  if (Array.isArray(param)) return `Array count: ${param.length}`;
  else return `String length: ${param.length}`;
}

console.log(printLength('hello'));
console.log(printLength(['hello', 'world']));