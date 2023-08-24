function generatePattern(nStars) {
  for (let i = 1; i <= nStars; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += String(j);
    }
    for (let j = i + 1; j <= nStars; j++) {
     if (j >= 10) row += '**';
     else row += '*';
    }
    console.log(row);
  }
}

generatePattern(7);
console.log('=========');

generatePattern(20);
