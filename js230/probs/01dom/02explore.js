console.log('02explore.js');

function childNodes(idNum) {
  let totalNodes = 0;
  // let node = document.getElementById(String(idNum));
  let node = document.querySelector(`[id='${idNum}']`);

  function walk(node) {
    for (let i = 0; i < node.childNodes.length; i += 1) {
      totalNodes += 1;
      walk(node.childNodes[i]);
    }
  }

  walk(node);

  return [node.childNodes.length, totalNodes - node.childNodes.length];
}

console.log(childNodes(1));
console.log(childNodes(2));
console.log(childNodes(3));
console.log(childNodes(4));
console.log(childNodes(5));
console.log(childNodes(6));
console.log(childNodes(7));
console.log(childNodes(8));
console.log(childNodes(9));
console.log(childNodes(10));

// console.log(document.querySelector('[id="1"]'));