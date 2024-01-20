// v2 solution - with transition
console.log('gallery2');

function toggleShow(imgId) {
  console.log(imgId);
  let figs = document.querySelectorAll('main > figure');
  console.log(figs);
  figs.forEach((fig, index) => {
    if (index === Number(imgId) - 1) fig.classList.add('show');
    else setTimeout(()=>fig.classList.remove('show'), 1000);
    // else fig.classList.remove('show');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // for thumbnails
  let prevActiveEl = document.querySelector('li > img[data-img="1"]');
  prevActiveEl.classList.add('active');
  
  let ulEl = document.querySelector('ul');
  ulEl.addEventListener('click', e => {

    if (e.target.tagName === 'IMG') {
      // update 'active' image thumbnail
      e.target.classList.add('active');
      if (e.target !== prevActiveEl) {
        prevActiveEl.classList.remove('active');
        prevActiveEl = e.target;
      }

      toggleShow(e.target.getAttribute('data-img'));
    }

  });
});