function swapName(fullName) {
  let names = fullName.split(' ');
  let output = `${names.pop()}, ${names.join(' ')}`;
  console.log(output);
  return output;
}

swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Mike Andrew Clark'); // Clark, Mike Andrew