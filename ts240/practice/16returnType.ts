// https://launchschool.com/lessons/f1e59145/assignments/e5afc1eb

{
  // given
  // function addNumbers(a: number, b: number): number {
  //   return a + b;
  // }
  
  // type AddNumbersParams = Parameters<addNumbers>;
  // type AddNumbersReturnType = ReturnType<addNumbers>;
  
  // type AddNumbersFunction = (args: AddNumbersParams) => AddNumbersReturnType;
}

{

  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  type AddNumbersParams = Parameters<typeof addNumbers>;
  type AddNumbersReturnType = ReturnType<typeof addNumbers>;
  
  type AddNumbersFunction = (...args: AddNumbersParams) => AddNumbersReturnType;

  const testFunc: AddNumbersFunction = addNumbers;
}