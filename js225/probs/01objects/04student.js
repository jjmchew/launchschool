export function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${year} year student`);
    },
    listCourses() {
      // console.log(this.courses);
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
      return course;
    },
    addNote(code, newNote) {
      let course = this.courses.filter(obj => obj.code === code);
      if (course.length === 0) throw Error('course not found');

      if (course[0].note === undefined) course[0].note = newNote;
      else course[0].note += '; ' + newNote;
    },
    viewNotes() {
      this.courses.forEach(obj => {
        if (obj.note !== undefined) console.log(`${obj.name}: ${obj.note}`);
      })
    },
    updateNote(code, newNote) {
      let course = this.courses.filter(obj => obj.code === code);
      if (course.length === 0) throw Error('course not found');

      course[0].note = newNote;
    },
  }
}

/*

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

*/