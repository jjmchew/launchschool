// extending interfaces
{
  interface Person {
    name: string,
    age: number,
  }

  interface Employee extends Person {
    employeeId: number,
  }

  const employee1: Employee = {
    name: 'jim', 
    age: 34,
    employeeId: 233434,
  };

  const person1: Person = employee1;

}