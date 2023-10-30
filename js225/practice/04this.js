function Period (hours, minutes) {  
  this.hours = hours;
  this.minutes = minutes;
}
Period.prototype.format = () => {  
  console.log(context === module.exports); // => true
  return this.hours + ' hours and ' + this.minutes + ' minutes';
};
Period.prototype.format2 = function() {
  return this.hours + ' hours and ' + this.minutes + ' minutes';
};
let walkPeriod = new Period(2, 30);
// #region testing
// console.log('hours minutes:', walkPeriod.hours, walkPeriod.minutes);
// console.log('format(): ', walkPeriod.format()); // => 'undefined hours and undefined minutes'
// console.log('format2(): ', walkPeriod.format2()); // => 'undefined hours and undefined minutes'

// walkPeriod.alt1 = function() { 
//   console.log(this);
//   return walkPeriod.format();
// };
// console.log('alt1: ', walkPeriod.alt1());

// walkPeriod.alt2 = function() {
//   console.log(this === walkPeriod);
//   return this.hours + ' hours and ' + this.minutes + ' minutes';
// };

// console.log('alt2: ', walkPeriod.alt2());

// walkPeriod.alt3 = function () {
//   return (() => {
//     console.log(this === walkPeriod);
//     return this.hours + ' hours and ' + this.minutes + ' minutes';
//   })();
// };
// console.log('alt3: ', walkPeriod.alt3());

// let func = walkPeriod.alt3;
// console.log('func(): ', func());

// walkPeriod.alt4 = () => {  
//   console.log(this === module.exports);
//   return this.hours + ' hours and ' + this.minutes + ' minutes';
// };
// console.log('alt4: ', walkPeriod.alt4());

// ========================================

// walkPeriod.alt1 = () => {  
//   return this.hours + ' hours and ' + this.minutes + ' minutes';
// };
// walkPeriod.alt2 = function () {  
//   return this.hours + ' hours and ' + this.minutes + ' minutes';
// };

// console.log('alt1: ', walkPeriod.alt1());
// console.log('alt2: ', walkPeriod.alt2());

// let walkPeriod2 = {
//   hours: 3,
//   minutes: 40,
//   alt3() {
//     let func = () => {
//       return this.hours + ' hours and ' + this.minutes + ' minutes';
//     };
//     return func();
//   }
// };
// console.log('walkPeriod2, alt3: ', walkPeriod2.alt3());

// walkPeriod.alt3 = walkPeriod2.alt3;
// console.log('walkPeriod, alt3: ', walkPeriod.alt3());

// console.log('walkPeriod: ', walkPeriod);
// walkPeriod.alt4 = function () {
//   console.log(this === walkPeriod);
//   return this.alt1();
// };
// console.log('walkPeriod alt4: ', walkPeriod.alt4());
// #endregion

// ================================
// #region LS example
// let obj1 = {
//   a: 'This is obj1',

//   foo() {
//     let bar = () => console.log(this.a);
//     bar();
//   },
// };

// let obj2 = {
//   a: 'This is obj2',
// };

// obj1.foo();                   // This is obj1

// obj2.foo = obj1.foo;
// obj2.foo(); 
// #endregion

// ================================
// #region scope test - Version 1
// a = "global scope";
// // a = "module scope";


// let bar = () => console.log(this.a, this===module.exports);
// bar();

// let foo = function () {
//   let bar = () => console.log(this.a);
//   bar();
// }
// foo();

// let obj1 = {
//   a: 'obj1 scope',
// };
// obj1.foo = foo;
// obj1.foo();
// obj1.bar = bar;
// console.log('>>> obj1.bar()');
// obj1.bar();

// let obj2 = {};
// obj2.foo = bar;
// console.log('>>> obj2.foo()');
// obj2.foo();

// // using constructor - similar to walkPeriod example
// function MyObj() {
//   this.a = 'MyObj scope';
// }
// MyObj.prototype.bar = bar;
// let obj3 = new MyObj;
// console.log(obj3);
// obj3.bar();

// // =============================
// // Variable (scope) lookup example
// let vbar = () => console.log(a);
// vbar();


// let vfoo = function () {
//   a = "vfoo scope";
//   let bar = () => console.log(a);
//   bar();
// }
// vfoo();

// if (true) {
//   let a = 'block scope';
//   vfoo();
// }

// (function() {
//   let a = 'function scope';
//   vfoo();
// })();
// #endregion
// ================================
// #region scope test - Version 2 - much better
//    - all behaviour is consistent with pure lexical scope
// let a = 'global';
// let arrow = () => console.log(a);
// let func = function() { console.log(a) };

// arrow(); // global
// func();  // global

// (function() {
//   let a = 'IIFE arrow';
//   arrow();
// })(); // global

// (function() {
//   let a = 'func expression';
//   func();
// })(); // global

// let arrow1 = function () {
//   let a = 'arrow1';
//   let arrowNested = () => console.log(a);
//   arrowNested();
// };
// let func1 = function() {
//   let a = 'func1';
//   let funcNested = function() { console.log(a); };
//   funcNested();
// };

// arrow1(); // arrow1
// func1();  // func1

// let arrow2 = function() {
//   let a = 'arrow2';
//   let arrowNested = arrow;
//   arrowNested();
// };
// let func2 = function() {
//   let a = 'func2';
//   let funcNested = func;
//   funcNested();
// };

// arrow2(); // global
// func2();  // global

// let arrow3 = function() {
//   let a = 'arrow3';
//   arrow();
// };
// let func3 = function() {
//   let a = 'func3';
//   func();
// };

// arrow3(); // global
// func3();  // func3
// #endregion
// ================================
// #region this test - Version 3 - much better
//    - for arrow functions, they seem to use the `this` of the parent in which they were defined
// a = 'global';
// // let arrow = () => console.log(this.a, this === module.exports); // for Node
// let arrow = () => console.log(this.a);  // for browser
// let func = function() { console.log(this.a) };
// arrow(); // undefined (Node: refers to module.exports, {} );  global (browser)
// func();  // global

// // 
// (function() {
//   let a = 'IIFE arrow';
//   arrow();
// })(); // undefined (Node: refers to module.exports, {} );  global (browser)
// (function() {
//   let a = 'func expression';
//   func();
// })(); // global

// // 
// let objArrow1 = {
//   a: 'objArrow1',
//   nest() {
//     arrow();
//   },
// };
// let objFunc1 = {
//   a: 'objFunc1',
//   nest() {
//     func();
//   },
// };
// objArrow1.nest(); // undefined (Node: refers to module.exports, {} );  global (browser)
// objFunc1.nest(); // global

// // 
// let objArrow2 = {
//   a: 'objArrow2',
//   nest() {
//     let arrow = () => console.log(this.a);
//     arrow(); // has no `this`, uses `this` of `nest`
//   },
// };
// let objFunc2 = {
//   a: 'objFunc2',
//   nest() {
//     let func = function() { console.log(this.a) };
//     func(); // maintains `this` of global object
//   },
// };
// objArrow2.nest(); // objArrow2
// objFunc2.nest(); // global

// let arrow3 = objArrow2.nest;
// arrow3(); // global

// let objArrow4 = {
//   a: 'objArrow4',
//   nest: objArrow2.nest,
// }
// objArrow4.nest(); // objArrow4

// objArrow4.nest2 = arrow;
// objArrow4.nest2(); // undefined (Node: refers to module.exports, {} );  global (browser)

// objArrow4.nest3 = objArrow2.nest;
// objArrow4.nest3(); // objArrow4

// #endregion
// ================================
// #region this nesting tests - Version 1
//    - to test my proposed summary (execution context of 'parent')
//    - try deeper nesting of functions or objects and move them around and see what happens
// let ob1 = {
//   a: 'ob1',
//   ob2: {
//     a: 'ob2',
//     ob3: {
//       a: 'ob3',
//       func() {
//         let arrow = () => console.log(this.a);
//         // let arrow = function () { console.log(this.a) };
//         arrow();
//       },
//     },
//   },
// };
// ob1.ob2.ob3.func();

// let ob2 = {
//   a: 'ob2',
// };

// ob2.func = ob1.ob2.ob3.func;
// ob2.func();

// ob2.ob3.func = ob1.ob2.ob3.func;
// ob2.ob3.func();


// let obj3 = {
//   a: 'ob3',
//   // func: () => { console.log(this, this.a); },
//   func () { console.log(this, this.a); },
// };
// console.log(obj3.func);
// obj3.func();
// obj3.func.call(obj3);
// obj3.func.apply(obj3);
// obj3.func.bind(obj3)();

let obj4 = {
  a: 'obj4',
  func() {
    let arrow = () => console.log(this, this.a);
    return arrow;
  },
}
obj4.func()(); // obj4  :  execution context of `func` is `obj4`

let obj5 = {
  a: 'obj5',
  func: obj4.func(), // `arrow` is assigned directly to `obj5.func`
};
obj5.func(); // obj4  :  execution context of `obj4.func` didn't change

let obj6 = {
  a: 'obj6',
  func: obj4.func,
}
obj6.func()(); // obj6  :  execution context of `obj4.func` is now `obj6`
// #endregion

