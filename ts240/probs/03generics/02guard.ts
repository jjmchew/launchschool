function printId(param: number | string): void {
  if (typeof param === 'string') console.log('Your ID is a string');
  else if (typeof param === 'number') console.log('Your ID is a number');
}