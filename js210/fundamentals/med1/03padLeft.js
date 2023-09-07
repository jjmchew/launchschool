function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

/*
Yes - the code will produce a table as follows:
 1  2  3  4  5  6  7  8  9 10
 2  4  6  8 10 12 14 16 18 20
 3  6  9 12 15 18 21 24 27 30
...
 9 18 27 35 45 54 63 72 81 90
Note that 9 times table will be the final row, however, the 10 times table is evident from the last column (even if 10 * 10 is not displayed).

*/
