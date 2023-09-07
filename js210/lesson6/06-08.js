const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

const { first, second, ...rest } = obj;

// CLASSIC SYNTAX

const first = obj.first;
const second = object.second;
const rest = {
  third: obj.third,
  rest: obj.rest,
};

