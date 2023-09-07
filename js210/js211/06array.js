let customObj = {
  length: 3,
};

[].push.call(customObj, '3 points');

console.log(customObj);