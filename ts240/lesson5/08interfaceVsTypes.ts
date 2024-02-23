// interfaces vs types
{
  const p1 = function() {
    type Point = { x: number };
    type Point = { y: number };
    
    const point: Point = { x: 1, y: 2 };

    // will raise an error : type cannot be redefined - it will not be automatically merged
  }


  const p2 = function() {
    interface UserInterface {
      name: string;
      email: string;
    }
    
    type UserType = {
      name: string;
      email: string;
    };
    
    function greetUser(user: UserType) {
      return `Hello, ${user.name}`;
    }
    
    const user: UserInterface = {
      name: "Alice",
      email: "alice@example.com",
    };
    
    console.log(greetUser(user));

    // no issues;  type and interface are structurally similar
  }

}