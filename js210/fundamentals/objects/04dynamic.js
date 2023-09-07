const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);

/*
'678' : myObject[prop2] refers to myObject['456'] as per the value referenced by const 'prop2'
'456' : myObject.prop2 refers to myObject['prop2'], which was re-assiged to '456'
*/



const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

/*
{ 'funcProp': 'hello, ' }
{ 'funcProp': 'world!' }

Although the *object* is a constant (i.e., the container cannot be re-assigned), the contents of the container (i.e., the properties) can be re-assigned.
The function `myFunc` returns a string which is used as the key to assign and later re-assign a property of the object `myObj`.
*/
