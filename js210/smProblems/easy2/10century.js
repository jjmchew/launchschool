function century(year) {
  const ORD = function ord(num) {
    let ones = num % 10;
    let tens = ((num - ones) / 10) % 10;
    if (ones === 1) {
      if (tens === 1) return 'th';
      else return 'st';
    } else if (ones === 2) {
      if (tens === 1) return 'th';
      else return 'nd';
    } else if (ones === 3) {
      if (tens === 1) return 'th';
      else return 'rd';
    } else return 'th';
  };

  let centuryNum = Math.floor(year / 100);
  if (year % 100 !== 0) centuryNum++;

  let century = String(centuryNum) + ORD(centuryNum);
  console.log(year, '   ', century);

  return century;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
