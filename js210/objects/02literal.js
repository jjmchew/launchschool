const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`); 
// WRONG: Victor Reyes

// MUST invoke the function - need to call the functions using '()'
// Otherwise, JS will output the code for 'firstName' and 'lastName' as functions.
