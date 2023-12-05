function domTreeTracer(idNum) {
  let returnObj = [];
  let node = document.getElementById(idNum);
  
  let addSiblings = node => {
    let siblings = Array.prototype.slice.call(node.parentNode.childNodes);
    siblings = siblings.filter(node => node.nodeName !== '#text').map(node => node.nodeName);
    returnObj.push(siblings);
    if (node.parentNode.id !== '') addSiblings(node.parentNode);
  };

  addSiblings(node);
  console.log(returnObj);
  return returnObj;
}

domTreeTracer(1);
domTreeTracer(2);
domTreeTracer(22);