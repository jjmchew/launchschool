/*
input
- integer: corresponds to the "generation number" (i.e., number of ancestors)

output
- each DOM element that has the same number of ancestors as the given integer will have a class 'generation-color' added to it

rules
- elements that are children of 'BODY' have generation 1
- adding of 'generation-color' is dynamic, but otherwise DOM elements are static
- all DOM elements with the same number of ancestors as the given element should have the 'generation-color' class added
- DOM elements will not otherwise change

notes
- might be fastest to generate reference data of all element IDs and corresponding number of ancestors once the HTML is drawn
- then, once an ID element is given, just look for ID numbers with same number of ancestors;  add class to nodes with those IDs
- using Array might be fastest - can use 'filter', etc.
- don't worry about optimizing approach until after it works

approach
- start with document.body.children : each child has 1 parent ('BODY')
- recursively
*/

function colorGeneration(genNum) {
  const NUM_IDS = 24;

  let getAncestors = node => {
    if (node.tagName === 'BODY') return [];
    else return getAncestors(node.parentElement).concat(node.tagName);
  };

  // create reference array: idx is ID num, element is # of ancestors
  const ANCESTORS = [];
  for (let i = 1; i <= NUM_IDS; i += 1) {
    ANCESTORS[i] = getAncestors(document.getElementById(i)).length;
  }

  // return elements by transforming idx num using map, then filter out nulls
  let nodes = ANCESTORS.slice().map((num, idx) => {
    if (num === genNum) return document.getElementById(idx);
    else return null;
  }).filter(element => element !== null);

  // add appropriate class name to returned nodes
  nodes.forEach(node => node.classList.add('generation-color'));
}

colorGeneration(1);
// colorGeneration(4);
// colorGeneration(7);
// colorGeneration(8);
// colorGeneration(3);
// colorGeneration(0);