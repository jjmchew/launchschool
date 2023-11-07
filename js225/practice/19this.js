// https://launchschool.com/lessons/24a4613a/assignments/2d53f659

// Problem 1
let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // 2  - `this` is `foo`

foo.bar(); // 2 - `this` is `foo`
Foo(); // 2 - `this` is `global` (undeclared variable)

obj = {};
Foo.call(obj); // 2 - `this` is `obj`
obj.bar(); // 2 - `this` is `obj`

console.log(this.a); // undefined - `this` is `module.exports` (node)
console.log(global.a);
