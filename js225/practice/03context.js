// https://launchschool.com/lessons/c9200ad2/assignments/84fbe7cb

// Problem 5
// part 1
var a = 10;
let b = 10;
let c = {
  a: -10,
  b: -10,
};

function add() {
  return this.a + b;
}

c.add = add;

console.log(add()); // 20 (in browser)  NaN in Node
console.log(c.add()); // 0 (in browser) 0 in Node

console.log(this === window);

// 2nd part
// let a = 10;  // line updated!
// let b = 10;
// let c = {
//   a: -10,
//   b: -10,
// };

// function add() {
//   return this.a + b;
// }

// c.add = add;

// console.log(add()); // NaN (in browser)  NaN in Node
// console.log(c.add()); // 0 (in browser) 0 in Node

/*
The output changes when `let` is used to declare variable `a` in the browser since variables defined with `var`
and `let` behave slightly differently.
In the browser, variables declared with `var` also become properties on the global `window` object.
Hence, when `add` is invoked directly in the global context, `this.a` references the property `a` on the `window` object.  Variables declared with `let` do not become properties on the global `window` object and thus `this.a` is undefined in the global context, and `add` returns `NaN`.
*/