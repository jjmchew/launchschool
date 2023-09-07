function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let { baz, qux, bar } = foo(1, 2, 3);

// Classic Syntax:

function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let baz = foo(1, 2, 3).baz;
let qux = foo(1, 2, 3).qux;
let bar = foo(1, 2, 3).bar;

// BETTER (foo isn't invoked 3 times):

let obj = foo(1, 2, 3);
let baz = obj.baz;
let qux = obj.qux;
let bar = obj.bar;

