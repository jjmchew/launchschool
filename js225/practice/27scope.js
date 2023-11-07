var a = 'a var';
b = 'b';

console.log(module.exports, global);

delete a;
delete b;

console.log(a, global);