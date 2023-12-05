/*
input
- integers:  representing numeric element IDs

output
- array of strings:  element tagNames for nested elements, starting with startId up to and including finishId

rules
- output array includes elements at startId and finishId
- if the finishId is NOT nested within the startId element, return `undefined`
- if there is no element at startId or finishId, return `undefined`
- only elements with `body` as ancestor are sliceable
- finishId does NOT need to be the innermost element (just nested within)

notes
- create a 'getAncestors' function - can check for `body` and appropriate nesting

*/

function sliceTree(startId, finishId) {
  let isValidId = id => {
    if (document.getElementById(id) === null) return false;
    return true;
  };

  // #region Version 1
  // let getAncestors = (id, startName = 'BODY') => {
  //   let ancestors = [];
    
  //   let addTagName = node => {
  //     ancestors.push(node.tagName);
  //     if (node.tagName === startName) return ancestors;
  //     else return addTagName(node.parentNode);
  //   };

  //   return addTagName(document.getElementById(id));
  // };
  // #endregion
  // #region Version 2 (re-factored for brevity)
  // Note: I had to add `startParent` to change the default `startName` to make this work since this recursive function is exclusive of `startName`
  let getAncestors = (id, startName = 'HTML') => {
    let addNode = node => {
      if (node.tagName === startName) return [];
      return addNode(node.parentElement).concat(node.tagName);
    };
    return addNode(document.getElementById(id));
  }
  // #endregion

  // guard clauses
  if (!isValidId(startId) || !isValidId(finishId)) return 'undefined';
  let ancestors = getAncestors(finishId);
  let startParent = document.getElementById(startId).parentElement.tagName;
  let startElement = document.getElementById(startId).tagName
  if (!(ancestors.includes('BODY'))) return 'undefined';
  if (!(ancestors.includes(startElement))) return 'undefined';

  // process valid start/finish ids
  ancestors = getAncestors(finishId, startParent);
  return ancestors;
}

console.log(sliceTree(1, 4));
// = ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76));
// = undefined
console.log(sliceTree(2, 5));
// = undefined
console.log(sliceTree(5, 4));
// = undefined
console.log(sliceTree(1, 23));
// = ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22));
// = ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19));
// = ["SECTION", "P", "SPAN", "STRONG", "A"]