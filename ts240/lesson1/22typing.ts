{
  // concatenate could return either a string or a number
  // - explicit typing on `result` or `numericResult` might be better
  // - could also define union type for `a` and `b`

  function concatenate(a, b) {
    return a + b;
  }
  
  const result: string = concatenate("Hello", "World");
  const numericResult: number = concatenate(1, 2);
  
  console.log(result);
  console.log(numericResult);
}