// Practice Problem 3

// implement the function `processInput` (add all type annotations) to produce the desired output

{
  // type Input = string | string[];

  // function processInput(input: Input) {
  //   // implementation here
  // }


  // // do not change:
  // let numVar: number = processInput(['aa', 'b', 'cc']);
  // let strVar: string = processInput('hello');

  // console.log(numVar); // 5  (total number of all characters in input array)
  // console.log(strVar); // 'ho' (first and last characters of input string)
}



// My answer
{
  type Input = string | string[];

  function processInput(input: string): string;
  function processInput(input: string[]): number;
  function processInput(input: Input) {
    if (typeof input === 'string') {
      const length = input.length;
      const first: string = input[0] ?? '';
      const last: string = input[length - 1] ?? '';
      return first + last;
    } else {
      return input.join('').length;
    }
  }


  // do not change:
  let numVar: number = processInput(['aa', 'b', 'cc']);
  let strVar: string = processInput('hello');

  console.log(numVar); // 5  (total number of all characters in input array)
  console.log(strVar); // 'ho' (first and last characters of input string)
}