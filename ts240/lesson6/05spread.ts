// object spreading
{
  // given
  interface Person {
    name: string;
    age: number;
  }
  
  interface Address {
    street: string;
    city: string;
    country: string;
  }
  
  interface Combined {
    name: string;
    age: number;
    street: string;
    city: string;
    country: string;
    phone: string;
  }
  
  const person: Person = {
    name: "John",
    age: 30,
  };
  
  const address: Address = {
    street: "123 Main St",
    city: "Tokyo",
    country: "Japan",
  };
  
  const combined: Combined = {
    ...person,
    ...address,
    phone: "555-1234",
  };

  // no errors - all types are consistent
}