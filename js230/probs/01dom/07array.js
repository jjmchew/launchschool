/*
This code is better cut and paste into snippets to test each of the provided HTML pages for this question

This code should convert the given HTML to an array of nested arrays corresponding to nodes
*/

// #region Version 1 - sort of works
//   had trouble with getting final arrays in the right format
//   TO fix:  need to remember what the "break" CONDITIONS are for recursive functions - i.e., if something different happens in the fct, need to code that carefully
function makeDOMArray() {
  let walk = (node, colArray) => {
    let thisLevel = [node.tagName];
    let children = [];

    for (let idx = 0; idx < node.children.length; idx += 1) {
      if (node.tagName) walk(node.children[idx], children);
    }
    thisLevel.push(children);

    if (!colArray) return thisLevel;
    else colArray.push(thisLevel);
  };

  let finalArray = walk(document.body);
  return finalArray;
}

let result = makeDOMArray();
console.log(JSON.stringify(result));
console.log(JSON.stringify(result) === '["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]]');
// #endregion

// #region Version2 - after looking at answers
// function nodesToArr(node = document.body) {
//   return [node.tagName, [...node.children].map(nodesToArr)];
// }
// let result = nodesToArr();
// console.log(JSON.stringify(result));
// #endregion

/*
Solution to 1
["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

Solution to 2
["BODY",[["HEADER",[]],["MAIN",[["DIV",[]],["DIV",[]]]],["FOOTER",[]]]]

Solution to 3
testing the stringified solution to example 3:
["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]]

["BODY",[
  ["DIV",[
    ["DIV",[]],
    ["DIV",[
      ["DIV",[]]
    ]]
  ]],
  ["DIV",[]],
  ["DIV",[
    ["DIV",[]],
    ["DIV",[]],
    ["DIV",[]]
  ]]
]]
*/