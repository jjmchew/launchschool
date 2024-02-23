// arrays and index signatures
{
  type CustomArray = {
    [index: number]: string | number;
  };
  
  const customArray: CustomArray = ["apple", 42, "banana"];

  // implement:
  function processCustomArray(arr: CustomArray): string[] {
    let output: string[] = [];
    Object.values(arr).forEach(value => {
      if (typeof value === 'string') output.push(value.toUpperCase());
    })
    return output;
  }

  console.log(processCustomArray(customArray));
}