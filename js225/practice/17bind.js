// https://launchschool.com/exercises/2726c8c6

function myBind(func, context, ...args) {
  return function() {
    return func.call(context, ...args);
  };
}


let sayName = function(...word) {
  console.log('sayName: ', this.name, ...word);
};

let person = {
  name: 'George',
};

let sayGeorge = myBind(sayName, person, ', man', 3, 'pizza');
console.log(sayGeorge);
sayGeorge();