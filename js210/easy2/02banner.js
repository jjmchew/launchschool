function logInBox(str) {
  let repeat = function repeat(chr, num) {
    let out = '';
    for (let i = 0; i < num; i++) {
      out += chr;
    }
    return out;
  };

  let lines = [];
  lines.push(`+${repeat('-', str.length + 2)}+`);
  lines.push(`|${repeat(' ', str.length + 2)}|`);
  lines.push(`| ${str} |`);
  lines.push(`|${repeat(' ', str.length + 2)}|`);
  lines.push(`+${repeat('-', str.length + 2)}+`);

  return lines.join("\n");
}

console.log(logInBox('To boldly go where no one has gone before.'));
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
console.log(logInBox(''));
// +--+
// |  |
// |  |
// |  |
// +--+
