{
  function getLengthOfArray(value: string[]): number;
  function getLengthOfArray(value: string): string;
  function getLengthOfArray(value: string | string[]): number | string {
    if (Array.isArray(value)) {
      return value.toString(); // incorrect implementation
    } else {
      return "Not an array!";
    }
  }

  const numberResult: number = getLengthOfArray(["a", "b", "c"]);  // no Error!
  console.log(numberResult); // "a,b,c"
  console.log(typeof numberResult); // string - even tho numberResult was originally typed as "number"
  const newNum: number = numberResult;
  
  // const newStr: string = numberResult; // TS still thinks `numberResult` is a number!!
}