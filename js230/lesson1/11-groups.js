// Group 1 - Q1
/*
<!doctype html>
<html lang="en-US">
  <head>
    <title>On the River</title>
  </head>
  <body>
    <h1>On The River</h1>
    <p>The sun is low</p>
    <p>The waters flow</p>
  </body>
</html>
*/

function findAllP() {
  let pElements = [];
  let body = document.body.childNodes;
  console.log(body);
  for (let i = 0; i < body.length; i += 1) {
    if (body[i].nodeName === 'P') pElements.push(body[i]);
  }
  return pElements;
}

console.log(findAllP());

// Group 1 - Q2
/*
<!doctype html>
<html lang="en-US">
  <head>
    <title>On the River</title>
  </head>
  <body>
    <div id="page1">
      <div class="intro">
        <p>The sun is low,</p>
      </div>
      <p>The waters flow,</p>
    </div>
    <div id="page2">
      <div class="intro">
        <p>My boat is dancing to and fro.</p>
      </div>
      <p>The eve is still,</p>
    </div>
    <div id="page3">
      <div class="intro">
        <p>Yet from the hill</p>
      </div>
      <p>The killdeer echoes loud and shrill.</p>
    </div>
  </body>
</html>
*/

// Note:  this needs to be a recursive solution since P elements are nested within other nodes
function addClass(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }

  let nodes = node.childNodes;
  for (let i = 0; i < nodes.length; i += 1) {
    addClass(nodes[i]);
  }
}

addClass(document.body);


// Group 1 - Q3
// re-writing the solution in 2 parts to 
//  1) get all P elements
//  2) add the correct CSS class

// #region Version 1
// let elementNodes = [];

// function getElementP(node, elementType) {
//   if (node instanceof elementType) {
//     elementNodes.push(node);
//   }
//   let nodes = node.childNodes;
//   for (let i = 0; i < nodes.length; i += 1) {
//     getElementP(nodes[i], elementType);
//   }
// }

// getElementP(document.body, HTMLParagraphElement);
// console.log(elementNodes);

// // 
// elementNodes.forEach(node => {
//   node.classList.add('article-text');
// });
// #endregion

// #region Version 2 (everything contained)
// let getElements = function(node, elementType) {
//   let nodeCollection = [];
  
//   let getElement = function (node, elementType) {
//     if (node instanceof elementType) {
//       nodeCollection.push(node);
//     }

//     let nodes = node.childNodes;
//     for (let i = 0; i < nodes.length; i += 1) {
//       getElement(nodes[i], elementType);
//     }
//   };

//   getElement(node, elementType);

//   return nodeCollection;
// };

// let assignClass = function(collection, className) {
//   collection.forEach(node => node.classList.add(className));
// };

// let pNodes = getElements(document.body, HTMLParagraphElement);

// assignClass(pNodes, 'article-text');

// console.log(pNodes);
// #endregion

// #region Version 3 (everything contained, chainable)
// let getElements = function(node, elementType) {
//   function NodeCollection(arr) {
//     this.collection = arr;
//   };
//   NodeCollection.prototype.assignClass = function(className) {
//     this.collection.forEach(node => node.classList.add(className));
//     return this.collection;
//   };
//   NodeCollection.prototype.push = function(element) {
//     this.collection.push(element);
//     return element;
//   };

//   let nodeCollection = new NodeCollection([]);
  
//   let getElement = function (node, elementType) {
//     if (node instanceof elementType) {
//       nodeCollection.push(node);
//     }

//     let nodes = node.childNodes;
//     for (let i = 0; i < nodes.length; i += 1) {
//       getElement(nodes[i], elementType);
//     }
//   };

//   getElement(node, elementType);

//   return nodeCollection;
// };

// let pNodes = getElements(document.body, HTMLParagraphElement).assignClass('article-text');

// console.log(pNodes);
// #endregion

// Group 2 - Q1
// #region V4 (using `.getElementsByTagName`)
// let pNodes = Array.prototype.slice.call(document.getElementsByTagName('p'));
// pNodes.forEach(node => node.classList.add('article-text'));
// console.log(pNodes);
// #endregion

// Group 2 - Q2
// let pNodes = Array.prototype.slice.call(
//   document.getElementsByClassName('intro')
// ).map(node => Array.prototype.slice.call(node.getElementsByTagName('p')))
//  .flat();

// pNodes.forEach(node => node.classList.add('article-text'));
// console.log(pNodes);

// Test : using CSS selectors
let pNodes = Array.prototype.slice.call(document.querySelectorAll('.intro p'));
pNodes.forEach(node => node.classList.add('article-text'));
console.log(pNodes);