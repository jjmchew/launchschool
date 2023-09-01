function getGrade(...grades) {
  let avg = grades.reduce((sum, val) => sum + val, 0) / grades.length;

  let grade;
  if (avg >= 90) grade = 'A';
  else if (avg >= 80) grade = 'B';
  else if (avg >= 70) grade = 'C';
  else if (avg >= 60) grade = 'D';
  else grade = 'F';

  console.log(avg, grade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
