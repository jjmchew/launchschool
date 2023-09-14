/*
https://launchschool.com/books/javascript/read/flow_control
exercise 1
*/
false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847');  // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
/*
( false || (false === 20) || true ) || false
( false || false || true ) || false
( false || true ) || false
true || false
true
*/
