// type soundness
{
  const p1 = function() {
    // given

    // example 1
    let x1: any = "Launch School";
    const y1: number = x1;
    console.log(y1);

    // example 2
    let x2: any = "Launch School";
    const y2: number = x2 as number;

    // implement
    function isNumber(val: any): val is number {
      return typeof val === 'number';
    }

    console.log(isNumber(y1), isNumber(y2));
  };
  // p1();

  const p2 = function() {
    function safeGet<T>(array: Array<T>, index: number): T | undefined {
      if (index < array.length) return array[index];
      else return undefined;
    }
    
    // test code
    const names: string[] = ["John", "Jane"];
    const name = safeGet(names, 2); // Should return undefined
    console.log('|', name, '|');

    const numbers: number[] = [1, 2, 3];
    const number = safeGet(numbers, 1); // Should return 2
    console.log(number);
  }
  p2();
}