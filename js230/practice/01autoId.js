let getId = (function getId() {
  let id = 0;
  return function() {
    id += 1;
    return id;
  };
})();

console.log(getId());
console.log(getId());
console.log(getId());
console.log(getId());
console.log(getId());

