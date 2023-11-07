// https://launchschool.com/exercises/c32e20ee

// #region using constructor functions / prototype directly
// let Person = function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// };
// Person.prototype.fullName = function fullName() {
//   return this.firstName + ' ' + this.lastName;
// };
// Person.prototype.communicate = function communicate() {
//   console.log('Communicating');
// };
// Person.prototype.eat = function eat() {
//   console.log('Eating');
// };
// Person.prototype.sleep = function sleep() {
//   console.log('Sleeping');
// };

// let Doctor = function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// };
// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.constructor = Doctor;
// Doctor.prototype.diagnose = function diagnose() {
//   console.log('Diagnosing');
// };

// let Professor = function Professor(firstName, lastName, age, gender, subject) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// };
// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.constructor = Professor;
// Professor.prototype.teach = function teach() {
//   console.log('Teaching');
// };

// let Student = function Student(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.study = function study() {
//   console.log('Studying');
// };

// let GraduateStudent = function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
//   Student.call(this, firstName, lastName, age, gender, degree);
//   this.graduateDegree = graduateDegree;
// };
// GraduateStudent.prototype = Object.create(Student.prototype);
// GraduateStudent.prototype.constructor = GraduateStudent;
// GraduateStudent.prototype.research = function research() {
//   console.log('Researching');
// };

// #endregion

// #region using class syntax
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  communicate() {
    console.log('Communicating');
  }
  eat() {
    console.log('Eating');
  }
  sleep() {
    console.log('Sleeping');
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }
  diagnose() {
    console.log('Diagnosing');
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }
  teach() {
    console.log('Teaching');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }
  study() {
    console.log('Studying');
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree;
  }
  research() {
    console.log('Researching');
  }
}
// #endregion

// #region provided test code
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
// #endregion
