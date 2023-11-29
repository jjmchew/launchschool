// These problems use the HTML on this page:
// https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html
/*
These solutions were developed directly in Chrome using snippets
- in Dev Tools > Sources
- CTRL - SHIFT - P (command window), type snippets > find "Create New"
- then type the desired code (or cut and paste the below)
- Ctrl - Enter to execute
*/

// Q5
let body = document.childNodes[1].childNodes[2];

let imgCount = 0;
let pngCount = 0;

walk(body, node => {
    if(node.nodeName === 'IMG') {
      imgCount += 1;
      let src = node.getAttribute('src');
      if (src.match(/\.png/i) !== null) pngCount += 1;
    }
});

console.log('img: ', imgCount); // 48
console.log('png: ', pngCount); // 23

// Q6
let links = [];
walk(body, node => {
    if (node.nodeName === 'A') links.push(node);
});

console.log(links[0], links.length);

links.forEach(node => {
    node.style.color = 'red';
});