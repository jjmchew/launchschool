// index signatures
{
  const p1 = function() {
    interface User {
      [key: number]: string;
    }
    
    const obj: User = {
      1: "Jane",
      2: "30",
      3: "female",
    };
    
    console.log(Object.keys(obj).every((key) => typeof key === "number"));


    // output will be 'false' since all JS object keys are strings
  }
  p1();




  const p2 = function() {
    type User = Map<number, string>;

    const obj: User = new Map();
    obj.set(1, "Jane");
    obj.set(2, "30");
    obj.set(3, "female");
    
    console.log(Object.keys(obj).every((key) => typeof key === "number")); // Output: true
  }
  p2();
}