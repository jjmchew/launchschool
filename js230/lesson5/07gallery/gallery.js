// Initial solution - no transition
console.log('gallery');

document.addEventListener('DOMContentLoaded', () => {
  let prevActiveEl = document.querySelectorAll('li > img')[0];
  prevActiveEl.classList.add('active');

  let figImgEl = document.querySelector('figure > img');
  let figCaptionEl = document.querySelector('figure > figcaption');

  
  let ulEl = document.querySelector('ul');
  ulEl.addEventListener('click', e => {

    if (e.target.tagName === 'IMG') {
      // update 'active' image
      e.target.classList.add('active');
      prevActiveEl.classList.remove('active');
      prevActiveEl = e.target;

      // update figure
      figImgEl.setAttribute('src', e.target.getAttribute('src'));
      figCaptionEl.textContent = e.target.getAttribute('title');
    }

  });
});