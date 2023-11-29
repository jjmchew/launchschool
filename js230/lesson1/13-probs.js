// https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html
// all problems were executed using chrome snippets at the url above

// Q1
let h2Elements = Array.prototype.slice.call(document.getElementsByTagName('h2'));
let h2WordCount = h2Elements.map(node => node.textContent.split(/\s+/).length);
console.log(h2WordCount);

// Q2
let div1 = document.getElementById('toc');
let div2 = document.getElementsByClassName('toc')[0];
let div3 = document.getElementsByClassName('toctitle')[0].parentNode;
let div4 = document.querySelector('#toc');
let div5 = document.querySelector('.toc');

// Q3
let links = Array.prototype.slice.call(document.querySelectorAll('.toc ul li a'));
links.forEach((node, index) => {
    if (index % 2 !== 0) node.style.color = 'green';
});

// Q4
let nodes = Array.prototype.slice.call(document.querySelectorAll('.thumbcaption'));
let nodeText = nodes.map(node => node.textContent.trim());
console.log(nodeText);

// Q5
let infobox = Array.prototype.slice.call(document.querySelectorAll('.infobox tr'));
let ranks = ['kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species'];
let classification = {};
infobox.forEach(node => {
    let str = String(node.firstElementChild.textContent).replace(/:/, '').toLowerCase();

    if (ranks.includes(str)) {
        classification[str] = node.lastElementChild.textContent;
    }
});

console.log(classification);