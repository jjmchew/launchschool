function Person (firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.eat = function eat() {
  console.log('Eating');
};

Person.prototype.communicate = function communicate() {
  console.log('Communicating');
};

Person.prototype.sleep = function sleep() {
  console.log('Sleeping');
};

Person.prototype.fullName = function fullName() {
  return this.firstName + ' ' + this.lastName;
};

// =============

function Doctor (firstName, lastName, age, gender, specialty) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialty = specialty;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function diagnose () {
  console.log('Diagnosing');
};
Doctor.prototype.constructor = Doctor;


// =============
function Student (firstName, lastName, age, gender, undergrad) {
  Person.call(this, firstName, lastName, age, gender);
  this.undergrad = undergrad;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function study() {
  console.log('Studying');
};
Student.prototype.constructor = Student;



function GraduateStudent (firstName, lastName, age, gender, undergrad, grad) {
  Student.call(this, firstName, lastName, age, gender, undergrad);
  this.grad = grad;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function research() {
  console.log('Researching');
};
GraduateStudent.prototype.constructor = GraduateStudent;

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

