const rlSync = require('readline-sync');

// Version1
/*
function getScores() {
  let scores = [1, 2, 3];
  return scores.map((_, i) => Number(rlSync.question(`Enter score ${i + 1}: `)) );
}
*/

// Further Exploration
function getScores() {
  let scores = [];
  let score = '';
  do {
    if (score !== '') scores.push(Number(score));
    score = rlSync.question(`Enter score ${scores.length + 1}: `);
  } while (score !== '');
  return scores;
}

function grade(score) {
  if (score >= 90) return 'A';
  else if (score >= 70) return 'B';
  else if (score >= 50) return 'C';
  else return 'F';
}

let scores = getScores();
let avg = scores.reduce((acc, score) => acc + score, 0) / scores.length;

console.log(`Based on the average of your ${scores.length} scores, your letter grade is "${grade(avg)}".`);
