let main = document.querySelector('main');
let articles = document.querySelectorAll('article');
let ul = document.querySelector('ul');

let getArticle = element => {
  for (let i = 0; i < articles.length; i += 1) {
    if (articles[i].contains(element)) return articles[i];
  }
};

let resetHighlight = () => {
  main.classList.remove('highlight');
  articles.forEach(article => article.classList.remove('highlight'));
};

let highlight = element => {
  if (!element) return;
  resetHighlight();
  element.classList.add('highlight');
};

document.body.addEventListener('click', e => {
  let article = getArticle(e.target);
  if(article) highlight(article);
  else if (e.target.tagName !== 'A') highlight(main);
});

ul.addEventListener('click', e => {
  let articleName = e.target.textContent;
  let articleIdx = parseInt(articleName.slice(articleName.length - 1), 10) - 1;
  highlight(articles[articleIdx]);
});