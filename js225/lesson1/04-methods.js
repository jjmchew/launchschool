let me = {
  firstName: 'jane',
  lastName: 'doe',
};

let me2 = {};
me.firstName = 'Jane';
me.lastName = 'Doe';

// function fullName(person) {
//   console.log(person.firstName + ' ' + person.lastName);
// }

// fullName(me);

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};


// let people = [];
// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// function rollCall(collection) {
//   collection.forEach(function (item) {
//     fullName(item);
//   });
// }

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

// rollCall(people);

people = {
  lastIndex: -1,
  collection: [],
  fullName: function (person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function () {
    this.collection.forEach(this.fullName);
  },
  get: function (person) {
    if (this.isInvalidPerson(person)) return;
    return this.collection[this.getIndex(person)];
  },
  add: function (person) {
    if (this.isInvalidPerson(person)) return;
    this.lastIndex += 1;
    this.collection.push({ ...person, id: this.lastIndex });
  },
  update: function (person) {
    if (this.isInvalidPerson(person)) return;
    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) this.add(person);
    else this.collection[existingPersonId] = person;
  },
  getIndex: function (person) {
    let index = -1;
    this.collection.forEach(function (comparator, i) {
      if (comparator.firstName === person.firstName &&
        comparator.lastName === person.lastName) {
        index = i;
      }
    });
    return index;
  },
  remove: function (person) {
    if (this.isInvalidPerson(person)) return;

    let index = this.getIndex(person);
    if (index === -1) return;

    this.collection.splice(index, 1);
    console.log(`${person.firstName} ${person.lastName} removed`);
  },
  isInvalidPerson: function (person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  }
};

people.add(me);
people.add(friend);
people.add(father);
people.add(mother);

people.rollCall();

people.remove({ firstName: 'dJohn', lastName: 'Smith' });

console.log(people);
