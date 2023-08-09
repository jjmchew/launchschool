// Question 1
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};
console.log(person.name);
console.log(person['name']);


// Question 2
// valid keys: 1, '1', undefined, 'hello world', true, 'true'


// Question 3
let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}


// Question 4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
ary = Object.keys(obj).map(e => e.toUpperCase());
console.log(ary);
console.log(obj);


// Question 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);


// Question 6
/*
"foo" : primitive, string
3.1415 : primitive, number
[ 'a', 'b', 'c' ] : object
false : primitive, boolean
foo : object *WRONG* - it's neither - an IDENTIFIER
function bar() { return "bar"; } : object
undefined : primitive : undefined
{ a: 1, b: 2} : object
*/


// Question 7
myObj.qux = 3;
// snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
// snippet 2
for (let key in myObj) {
  console.log(key);
}
// ** WRONG ** both code snippets provided would produce the same output, a list of keys ** WRONG **
// Object.keys only returns an object's OWN keys (i.e,.snippet 1 returns just 'qux')
// snippet 2 returns the own key first, then the inherited keys (i.e., 'qux', 'foo', 'bar')


// Question 8
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

function copyObj(objToCopy, copyKeys=null) {
  if (copyKeys === null) { return Object.assign({}, objToCopy); };

  newObj = {}
  copyKeys.forEach( key => {
    newObj[key] = objToCopy[key]
  });
  return newObj;
};


// Question 9
/*
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
*/

// foo.a will return 'hi' - the element referenced by property 'a' was re-assigned (array assigned to argument1 has same reference to element 'a' as foo):  re-assigning an object property mutates the original object
// qux will return 'hello' - argument2 is a local variable, no relation to the variable 'qux'


// Question 10
[1, 2, ["a", ["b", false]], null, {}]
// primitive values:  1, 2, 'a', 'b', false, null
// objects: overall array, ['a', ['b', false]], ['b', false], {}


// Question 11
let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
obj2.bar[3].xyz = 606;
console.log(obj2);


// Question 12
/*
function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"
*/


// Question 13
function foo(bar) {
  console.log(bar());
}

foo(()=>'Welcome');    // Should print 'Welcome'
foo(()=>3.1415);    // Should print 3.1415
foo(()=>[1, 2, 3]);    // Should print [1, 2, 3]


// Question 14
function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();
/*
variables: hello, greeting, name, xyzzy, howdy, foo
object property names: a, b, c, d, 0, 1, 2
primitive values: ' ', 1, 2, 3, 4, 5, 'Hi', 'Grace' **AND** 'a', 'b', 'c', 'd', '0', '1', '2' (keys for objects and arrays)
objects: function hello, function xyzzy, { a... }, [3, 4, 5], {}
*/


// Question 15
function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');
/*
variables: bar, arg1, arg2, foo, qux, result
object property names: 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', '0', '1', '2', '3'
primitive values: 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, 'Victor', 'Antonina', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', '0', '1', '2', '3'
objects: function bar, result obj, qux object, [1, 2, 3, [4, 5, 6]], [4, 5, 6]
*/
