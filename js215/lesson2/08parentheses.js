isBalanced('What (is) this?');        // true
console.log('===');
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
console.log('===');
isBalanced('((What) (is this))?');    // true
console.log('===');
isBalanced('((What)) (is this))?');   // false
console.log('===');
isBalanced('Hey!');                   // true
console.log('===');
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false


function isBalanced(string) {
  let returnVal = true;
  let count = 0;

  let check = (char) => {
    if (char === '(') count += 1;
    else if (char === ')') count -= 1;
  };

  string.split('').forEach(char => {
    // console.log(char);
    check(char);
    if (count < 0) {
      returnVal = false;
     }
  });
  if (count !== 0) returnVal = false;
  console.log(returnVal);
  return returnVal;
}
