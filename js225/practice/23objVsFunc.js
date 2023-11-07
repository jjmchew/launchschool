let obj1 = {
  a: 1,
  b: 2,
  list() {
    console.log('obj1: ', this.a, this.b);
  },
};

obj1.list();

let Obj2 = function Obj2() {
  this.a = 'a';
  this.b = 'b';
  this.list = function list() {
    console.log('Obj2: ', this.a, this.b);
  }
  this.list();
};

console.log('global: ', global.a, global.b);
Obj2();
console.log('global: ', global.a, global.b);
Obj2.call(obj1);
console.log(obj1);
obj1.list();

let obj3 = new Obj2;
obj3.a = 'obj3a';
obj3.list.call(obj1);
obj3.list();