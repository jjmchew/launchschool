function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  // missing code
  return {
    colors,
    type: animalType,
    age,
  }
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]
