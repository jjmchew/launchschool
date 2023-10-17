import { createStudent } from './04student.js';

let foo = createStudent('foo', '3rd');
let bar = createStudent('bar', '1st');
let qux = createStudent('qux', '2nd');
let bad = createStudent('bad', '6th');

let math = { name: 'Math', code: 101 };
let advMath = { name: 'Advanced Math', code: 102 };
let physics = { name: 'Physics', code: 202 };

let school = {
  students: [],
  addStudent(student) {
    const VALID_YEARS = '1st 2nd 3rd 4th 5th'.split(' ');

    if (!VALID_YEARS.includes(student.year)) {
      console.log('Invalid Year');
      return 'Invalid Year';
    } else {
      this.students.push(student);
      return student;
    }
  },
  enrollStudent(studentName, course) {
    let student = this.getStudent(studentName);

    let existingCourse = student.listCourses().filter(obj => obj.code === course.code);
    if (existingCourse.length === 0) {
      student.addCourse(Object.assign({}, course));
    } else throw Error(`student already enrolled in ${course.name}`);
  },
  addGrade(studentName, code, grade) {
    let student = this.getStudent(studentName);
    let existingCourse = student.listCourses().filter(obj => obj.code === code);
    if (existingCourse.length === 0) throw Error(`${studentName} is not enrolled in course ${String(code)}`);
    existingCourse[0].grade = grade;
  },
  getReportCard(student) {
    let studentObj = this.getStudent(student.name);
    studentObj.listCourses().forEach(course => {
      console.log(`${course.name}: ${course.grade ? String(course.grade) : 'In progress'}`);
    });
  },
  courseReport(courseName) {
    let grades = [];
    this.students.forEach(student => {
      student.listCourses().forEach(course => {
        if (course.name === courseName && course.grade !== undefined) {
          grades.push({name: student.name, grade: course.grade});
        }
      });
    });
    if (grades.length !== 0) {
      console.log(`=${courseName} Grades=`);
      grades.forEach(entry => console.log(`${entry.name}: ${String(entry.grade)}`));
      console.log(`---`);
      let avg = grades.reduce((sum, obj) => sum + obj.grade, 0) / grades.length;
      console.log(`Course Average: ${String(avg)}`);
    }
  },
  getStudent(studentName) {
    let student = this.students.filter(obj => obj.name === studentName)[0];
    if (student === undefined) throw Error('student not found');
    return student;
  },
}

// execute cases
school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);
school.addStudent(bad);

school.enrollStudent('foo', math);
school.enrollStudent('foo', advMath);
school.enrollStudent('foo', physics);
school.enrollStudent('bar', math);
school.enrollStudent('qux', math);
school.enrollStudent('qux', advMath);

school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

school.addGrade('bar', 101, 91);

school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
console.log(foo);
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

console.log(bar);
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

console.log(qux);
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined