// https://launchschool.com/lessons/18156389/assignments/7aa69c34

{
  // given:
  type CustomArray = {
    [index: number]: string | number;
  };
  
  const customArray: CustomArray = ["apple", 42, "banana"];

  // implement:
  function processCustomArray(arr: CustomArray): string[] {
    let result: string[] = []
    for (const key in arr) {
      const el = arr[key];
      if (typeof el === 'string') {
        result.push(el.toUpperCase());
      }      
    }
    return result;
  }

  let strs: string[] = processCustomArray(customArray);
  console.log(strs);
}