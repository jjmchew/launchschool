// union types
{
  function concatenateStrings(a: string, b: string): string {
    return a + b;
  }
  
  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  const result = concatenateStrings("Hello", "World");
  const numericResult = addNumbers(1, 2);

  // implement:
  function combine(a: number | string, b: number | string): number | string | undefined {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    else if (typeof a === 'string' && typeof b === 'string')return a + b;
  }
}