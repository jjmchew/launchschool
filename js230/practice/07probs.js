// Problems from https://launchschool.com/lessons/ba24c7d4/assignments/8449a743
// lesson 1, assignment 13

// cut and paste all problem solutions into snippets for webpage:
// https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html

// #region Problem 1
const p1 = (function() {
  let count = [];

  const h2s = document.querySelectorAll('h2');
  h2s.forEach(h2 => {
    let words = h2.textContent.trim().split(' ');
    count.push(words.length);
  })
  console.log(count);
})();
// #endregion

// #region Problem 2
const p2 = (function() {
  const h2s = document.querySelectorAll('h2');
  let div1;
  let div2;
  let div3;
  h2s.forEach(h2 => {
    if (h2.textContent.includes('Contents')) {
      div1 = h2.parentNode.parentNode;
    }
  });

  div2 = document.querySelector('div.toc');
  div3 = document.getElementById('toc');

  console.log(div1, div2, div3);
})();
// #endregion

// #region Problem 3
const p3 = (function() {
  const toc = document.querySelector('.toc');
  const as = toc.querySelectorAll('a');

  as.forEach((a, idx) => {
    if (idx % 2 === 1) a.style.color = 'green';
  });
})();
// #endregion

// #region Problem 4
const p4 = (function() {
  const text = [];
  const thumbnails = document.querySelectorAll('div.thumbcaption');
  thumbnails.forEach(thumbnail => {
    text.push(thumbnail.textContent.trim());
  });
  console.log(text);
})();
// #endregion

// #region Problem 5
const p5 = (function() {
  const KEYS = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species', ];
  const trs = document.querySelectorAll('table.infobox tr');

  let result = {};

  KEYS.forEach(key => {
    
    trs.forEach(tr => {
      if (tr.firstElementChild.textContent.includes(key)) {
        result[key] = tr.lastElementChild.textContent.trim();
      }
    });
    
  });

  console.log(result);
  return result;
})();
// #endregion