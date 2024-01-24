console.log('animals');

document.addEventListener('DOMContentLoaded', () => {

  let figures = document.querySelectorAll('figure');

  let addCaption = (target, add) => {
    let caption = target.querySelector('figcaption');
    if (add) caption.classList.add('show');
    else caption.classList.remove('show');
  };
  
  figures.forEach(figure => {
    let timer;
    figure.addEventListener('mouseenter', e => {
      if (e.target.tagName === 'FIGURE') {
        timer = setTimeout(() => addCaption(e.target, true), 1000);
      }
    });

    figure.addEventListener('mouseleave', e => {
      if (e.target.tagName === 'FIGURE') {
        if (timer) clearTimeout(timer);
        addCaption(e.target, false);
      }
    });
  });

});