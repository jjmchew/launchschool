import { createStudent } from '../01objects/04student.js';



const school = (function() {
  const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
  
  let students = [];

  function getCourse(student, courseName) {
    return student.listCourses().filter(({name}) => name === courseName)[0];
  }

  function getStudent(studentName) {
    let student = students.filter(obj => obj.name === studentName)[0];
    if (student === undefined) throw Error('student not found');
    return student;
  }

  return {
    addStudent(name, year) {
      if (VALID_YEARS.includes(year)) {
        const student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },
  
    enrollStudent(studentName, courseName, courseCode) {
      let student = getStudent(studentName);
      student.addCourse({name: courseName, code: courseCode})
    },
  
    addGrade(studentName, courseName, grade) {
      let student = getStudent(studentName);
      const course = getCourse(student, courseName);
  
      if (course) {
        course.grade = grade;
      }
    },
  
    getReportCard(studentName) {
      let student = getStudent(studentName);
      student.listCourses().forEach(({grade, name}) => {
        if (grade) {
          console.log(`${name}: ${String(grade)}`);
        } else {
          console.log(`${name}: In progress`);
        }
      });
    },
  
    courseReport(courseName) {
      const courseStudents = students.map(student => {
        const course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(({grade}) => grade);
  
      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);
  
        const average = courseStudents.reduce((total, {name, grade}) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade;
        }, 0) / courseStudents.length;
  
        console.log('---');
        console.log(`Course Average: ${String(average)}`);
      }
    },
  };
})();



school.addStudent('foo', '3rd');
school.addStudent('bar', '1st');
school.addStudent('qux', '2nd');
school.addStudent('bad', '6th');

school.enrollStudent('foo', 'Math', 101);
school.enrollStudent('foo', 'Advanced Math', 102);
school.enrollStudent('foo', 'Physics', 202);
school.enrollStudent('bar', 'Math', 101);
school.enrollStudent('qux', 'Math', 101);
school.enrollStudent('qux', 'Advanced Math', 102);

school.addGrade('foo', 'Math', 95);
school.addGrade('foo', 'Advanced Math', 90);

school.addGrade('bar', 'Math', 91);

school.addGrade('qux', 'Math', 93);
school.addGrade('qux', 'Advanced Math', 90);


school.getReportCard('foo');
school.courseReport('Math');