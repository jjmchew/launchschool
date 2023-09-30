let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


/*

*/

const WEIGHT_EXAM = 0.65;
const WEIGHT_EXERCISES = 0.35;

let assignLetter = (grade) => {
  if (grade >= 93) return 'A';
  else if (grade >= 85) return 'B';
  else if (grade >= 77) return 'C';
  else if (grade >= 69) return 'D';
  else if (grade >= 60) return 'E';
  else return 'F';
};
let sum = (total, score) => total + score;
let min = (min, current) => {
  if (current < min) return current;
  else return min;
};
let max = (max, current) => {
  if (current > max) return current;
  else return max;
};

function studentGrades(scores) {
  let grades = [];

  Object.values(scores).forEach(student => {
    let examAvg =
        student.scores.exams.reduce(sum) / student.scores.exams.length;
    let exercisesTotal = student.scores.exercises.reduce(sum);
    let grade =
      Math.round((examAvg * WEIGHT_EXAM) + (exercisesTotal * WEIGHT_EXERCISES));
    let letter = assignLetter(grade);
    grades.push(`${String(grade)} (${letter})`);
  });
  return grades;
}

function getExams(scores) {
  let exams = {};
  Object.values(scores).forEach(student => {
    student.scores.exams.forEach((grade, index) => {
      exams[index] = exams[index] || [];
      exams[index].push(grade);
    });
  });
  return exams;
}
function summarizeExams(scores) {
  let output = [];
  Object.values(getExams(scores))
    .forEach(array => {
      let average = (array.reduce(sum) / array.length).toFixed(1);
      let minimum = array.reduce(min);
      let maximum = array.reduce(max);
      output.push({
        average,
        minimum,
        maximum,
      });
    });

  return output;
}

function generateClassRecordSummary(scores) {
  if (WEIGHT_EXAM + WEIGHT_EXERCISES !== 1) throw Error('Exam weight and exercise weight do not add to 100%');

  let output = {
    studentGrades: studentGrades(scores),
    exams: summarizeExams(scores),
  };
  console.log(output);
  return output;
}

generateClassRecordSummary(studentScores);

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }