// Question 1
false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3 **got this one wrong!**
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true **got this one wrong**

// Question 2, 3
function evenOrOdd(num) {
  if (!Number.isInteger(num)) { return; }

  if (num % 2 === 0) { console.log('even'); }
  else { console.log('odd') }
}

evenOrOdd(2);
evenOrOdd(3);

// Question 4
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// This logs 'Product 2' to the console. 'serial' is assigned the value '113' which corresponds to the 2nd case in the 'switch' statement and thus 'Product 2' gets logged to the console.
// **WRONG**
// Note the lack of 'break' statements.  The following is logged:
// Product 2
// Product 3
// Product not found

// Question 5
// return foo() ? 'bar' : qux();
/*
if (foo()) { return 'bar'; }
else { return qux(); }
*/

// Question 6
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
// Not Empty, since [] will evaluate as truthy.

// Question 7
function numberRange(num) {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50 inclusive`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100 inclusive`);
  } else if (num > 100) {
    console.log(`${num} greater than 100`);
  } else if (num < 0) {
    console.log(`${num} less than 0`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

// Question 9
console.log(false ?? null); // false
console.log(true ?? (1 + 2)); // true
console.log((1 + 2) ?? true); // 3
console.log(null ?? false); // false
console.log(undefined ?? (1 + 2)); // 3
console.log((1 + 2) ?? null); // 3
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null

// Question 10
function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7);
show(0, 0);
show(4);
show();
/*
foo is 5, bar is 7
foo is 0, bar is 0
foo is 4, bar is 42
foo is 3, bar is 42
*/


