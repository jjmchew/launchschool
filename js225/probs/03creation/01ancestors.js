Object.prototype.ancestors = function () {
  let names = [];
  let obj = this;
  while (Object.getPrototypeOf(obj) !== null) {
    obj = Object.getPrototypeOf(obj);
    if (obj.name !== undefined) names.push(obj.name);
    else names.push('Object.prototype');
  }
  console.log(names);
  return names;
}

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']