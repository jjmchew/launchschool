function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          // msg += `${morning} ${name}`; // this is missing - object properties are not being accessed
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          // msg += `${afternoon} ${name}`; // this is missing - object properties are not being accessed
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          // msg += `${evening} ${name}`; // this is missing - object properties are not being accessed
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
// Good Morning Victor


