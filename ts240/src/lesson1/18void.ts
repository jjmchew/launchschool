{
  // error: a function that returns no meaningful valid cannot return a value (e.g., sum)
  function logSum(a: number, b: number): void {
    const sum = a + b;
    console.log("The sum of", a, "and", b, "is", sum);
    return sum;
  }
  
  logSum(3, 4);
}