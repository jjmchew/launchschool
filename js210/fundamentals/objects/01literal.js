const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1]; // WRONG:  need to indicate key as string e.g., myObject['1'];
myObject[a]; // JS interprets 'a' as a variable; to be a key, needs to be a string 'a'
myObject.a;
