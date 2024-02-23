// the object type
{
  const p1 = function() {
    // given
    // function getProperty(obj: object, key: string) {
    //   return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
    // }

    // refactor to work

    interface CustomObj {
      [key: string]: unknown,
    }

    function getProperty(obj: CustomObj, key: string) {
      return obj[key];
    }
    console.log(getProperty({key: "value"}, "key"));

    // additional test code
    const obj = {
      name: "John",
      age: 30,
    };
    
    const x = getProperty(obj, "name");
    const y = getProperty(obj, "age");

    console.log(x);
    console.log(y);
  };
  // p1();


  const p2 = function() {
    interface CustomObj {
      [key: string]: unknown,
    }

    // ** WRONG ** - need to apply a more advanced concept (<T, K extends keyof T>)
    function getProperty(obj: CustomObj, key: string) {
      if (typeof obj[key] === 'string') return String(obj[key]);
      else if (typeof obj[key] === 'number') return Number(obj[key]);
      else return obj[key];
    }

    // additional test code
    const obj = {
      name: "John",
      age: 30,
    };
    
    const x = getProperty(obj, "name");
    const y = getProperty(obj, "age");

    console.log(x);
    console.log(y);
  };
  p2();
}