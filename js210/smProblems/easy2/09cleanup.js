function cleanUp(str) {
  let regex = /[^a-zA-Z]+/g;
  let newStr = str.replaceAll(regex, ' ');
  console.log(newStr);
  return newStr;
}

cleanUp("---what's my +*& line?");    // " what s my line "
