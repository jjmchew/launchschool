class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    console.log('Eating');
  }

  communicate() {
    console.log('Communicating');
  }

  sleep() {
    console.log('Sleeping');
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialty) {
    super(firstName, lastName, age, gender);
    this.specialty = specialty;
  }

  diagnose() {
    console.log('Diagnosing');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, undergrad) {
    super(firstName, lastName, age, gender);
    this.undergrad = undergrad;
  }

  study() {
    console.log('Studying');
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, undergrad, grad) {
    super(firstName, lastName, age, gender, undergrad);
    this.grad = grad;
  }

  research() {
    console.log('Researching');
  }
}

// test code provided
const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'