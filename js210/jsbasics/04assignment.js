const myName = 'Bob';
const saveName = myName;
myName.toUpperCase();
console.log(myName, saveName);
// This code will log:
// Bob Bob
// The .toUpperCase() method is non-destructive so calling it on myName has no impact to the values referenced by myName.

