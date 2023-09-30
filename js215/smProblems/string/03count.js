letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount(string) {
  let count = (regexStr) => {
    return string.match(new RegExp(regexStr, 'g'))?.length || 0;
  };
  let output = {
    lowercase: count(`[a-z]`),
    uppercase: count(`[A-Z]`),
    neither: count(`[^a-zA-Z]`),
  }
  console.log(output);
  return output;
}