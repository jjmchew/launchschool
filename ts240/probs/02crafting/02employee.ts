type Employee = {
  id: number,
  name: string,
  department: string,
};

let employee: Employee = {
  id: 232134,
  name: 'Jim bob',
  department: 'HR',
};

// LS solution involves defining type directly, rather than using an alias
//  **using object type annotation**

let employee2: {id: number, name: string, department: string} = {
  id: 3248938,
  name: 'dude',
  department: 'snow school',
};

