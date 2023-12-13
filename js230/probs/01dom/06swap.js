console.log('swap');

function nodeSwap(...ids) {
  const [id1, id2] = ids.sort((a, b) => a - b);
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  let getAncestors = node => {
    if (node.tagName === 'BODY') return [];
    else return getAncestors(node.parentElement).concat(parseInt(node.id, 10));
  };

  if (node1 === null || node2 === null) return undefined;
  if (getAncestors(node1).includes(id2) || getAncestors(node2).includes(id1)) return undefined;

  const copy1 = node1.cloneNode(false);
  node1.insertAdjacentElement('beforebegin', copy1);

  const copy2 = node2.cloneNode(false);
  node2.insertAdjacentElement('beforebegin', copy2);

  copy2.insertAdjacentElement('afterend', node1);
  copy1.insertAdjacentElement('afterend', node2);

  copy1.remove();
  copy2.remove();
}

console.log(nodeSwap(3, 1));
console.log(nodeSwap(7, 9));