
function myProgram() {
  console.log(adj);
  myFunc('night');
}

let myFunc = function hilariouslyLongName(arg) {
  var adj = 'silent';
  console.log(`That's a ${adj} ${arg}`);
};

myProgram();