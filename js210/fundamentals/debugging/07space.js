// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team[ceo] = 'Kim';
team[scrumMaster] = 'Alice';
team[developer] = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team[ceo]}`);
console.log(`Scrum master: ${company.team[scrumMaster]}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

console.log(company.team);
console.log(team);
// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

/*
The unexpected behaviour comes from the fact that when assigning values to properties of the `team` object, the syntax attempts to use a custom object as the property key name. Object properties must be named with strings, and passing in a custom object will coerce the object into a string '[object Object]'. Thus, on the last assignment on line 24 of `team[developer]` the value of the key '[object Object]' is `undefined`, which is what is returned in the console.logs on lines 33 and 34 (i.e., both lines evalute to `company.team['[object Object]']` which has the value `undefined`.
The data structure needs to be re-defined to allow for distinct string keys for the object `team`.
*/
