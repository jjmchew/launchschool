function stringy(num) {
  let out = function out(i) {
    if (i % 2 === 0) return "1";
    else return "0";
  };

  let str = '';
  for (let i = 0; i < num; i++) {
    str += out(i);
  }
  console.log(str);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
