function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

// Q1
let h1 = document.childNodes[1].lastChild.childNodes[1];
console.log(h1);
h1.style.color = 'red';
h1.style.fontSize = '48px';

// Q2
let pCount = 0;
walk(document, node => {
  // console.log(node.nodeName);
  if (node.nodeName === 'P') pCount += 1;
});
console.log(pCount);

// Q3
let words = [];
walk(document, node => {
  if (node.nodeName === 'P') {
    let pLine = node.childNodes[0].nodeValue;
    pLine.replace('\n', '');
    pLine = pLine.trim();
    console.log(pLine.split(' ')[0]);
    words.push(pLine.split(' ')[0]);
  }
});
console.log(words);

// Q4
let count = 0;
walk(document, node => {
  if (node.nodeName === 'P') {
    if (count !== 0) {
      console.log(node);
      node.classList.add('stanza');
    }
    count += 1;
  }
});