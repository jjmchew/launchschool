// https://launchschool.com/lessons/edc1804c/assignments/09797d35

{
  // implement
  function processData(data: unknown): string {
    if (typeof data === 'string') return `Hello, ${data}`;
    else if (typeof data === 'number') return `Age: ${data}`;
    else throw new Error('Invalid data');
  }
  
  // given test data: 
  console.log(processData("Alice")); // Should print: "Hello, Alice"
  console.log(processData(25)); // Should print: "Age: 25"
  console.log(processData(true)); // Should throw an error: "Invalid data"

}