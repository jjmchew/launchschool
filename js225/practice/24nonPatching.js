// create a method accessible to all objects

let myObj = {
  a: 1,
};

// #region works by 'patching' Object.prototype
// Object.prototype.myMethod = function () {
//   console.log('myMethod: ', this.a);
// };
// #endregion

// #region add a prototype object in prototype chain
// FYI - had to set prototype of `myObj` - so not available on ALL objects
let myObjMethods = Object.create({});
myObjMethods.myMethod = function () {
  console.log('myMethod: ', this.a);
};
Object.setPrototypeOf(myObj, myObjMethods);
// #endregion

myObj.myMethod();

console.log(Object.getPrototypeOf(myObj) === myObjMethods);
console.log(Object.prototype.isPrototypeOf(myObj));