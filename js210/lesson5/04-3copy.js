function copyProperties(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  keys1.forEach(key => obj2[key] = obj1[key]);
  return keys1.length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
