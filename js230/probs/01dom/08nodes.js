// Given an array of nodes (same format as previous problem), the code should return the corresponding HTML

function arrayToNodes(nodeArray, parentNode) {
  let [tagName, children] = nodeArray;
  let newNode = document.createElement(tagName);
  if (children.length !== 0) {
    children.forEach(childArray => arrayToNodes(childArray, newNode));  
  }
  if (parentNode) {
    parentNode.appendChild(newNode);
  } else return newNode;
}


// example1
const nodes1 = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
console.log('returned value', arrayToNodes(nodes1));
/*
<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>
*/

// example2
// Nested array of nodes
const nodes2 = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];
console.log('returned value', arrayToNodes(nodes2));

// OR
//
// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]
