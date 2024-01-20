console.log('modal');

let MODAL_DATA = {
  Kevin: {
    src: 'images/img_kevin.jpg',
    alt: 'Kevin Wang',
    p : 'Kevin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  Louis: {
    src: 'images/img_louis.jpg',
    alt: 'Louis Burton',
    p : 'Louis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  Kasper: {
    src: 'images/img_kasper.jpg',
    alt: 'Kasper Salto',
    p : 'Kasper Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  Chris: {
    src: 'images/img_chris.jpg',
    alt: 'Chris Lee',
    p : 'Chris Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
};

function idElement(element) {
  let name = '';
  if (element.tagName === 'A') name = element.textContent;
  if (element.tagName === 'IMG') name = element.getAttribute('alt');
  
  if (name.includes('Kevin')) return 'Kevin';
  else if (name.includes('Louis')) return 'Louis';
  else if (name.includes('Kasper')) return 'Kasper';
  else if (name.includes('Chris')) return 'Chris';
  else return null;
}

function makeBackdrop() {
  let div = document.createElement('div');
  div.classList.add('backdrop');

  div.addEventListener('click', e => {
    e.preventDefault();
    div.remove();
    let modal = document.querySelector('.modal');
    modal.remove();
  });

  return div;
}

function makeModal(name) {
  // close modal icon
  let imgClose = document.createElement('img');
  imgClose.setAttribute('src', 'images/icon_close.png');
  imgClose.setAttribute('alt', 'close modal');

  let a = document.createElement('a');
  a.setAttribute('href', '#');
  a.setAttribute('id', 'modalClose');

  a.addEventListener('click', e => {
    e.preventDefault();
    const event = new Event('click');
    let backdrop = document.querySelector('.backdrop');
    backdrop.dispatchEvent(event);
  });

  a.appendChild(imgClose);

  // titleContainer
  let imgTitle = document.createElement('img');
  imgTitle.setAttribute('src', MODAL_DATA[name].src);
  imgTitle.setAttribute('alt', MODAL_DATA[name].alt);
  
  let h3Title = document.createElement('h3');
  h3Title.classList.add('modalName');
  h3Title.textContent = MODAL_DATA[name].alt;
  
  let divTitle = document.createElement('div');
  divTitle.classList.add('titleContainer');
  divTitle.appendChild(imgTitle);
  divTitle.appendChild(h3Title);

  // p
  let p = document.createElement('p');
  p.textContent = MODAL_DATA[name].p;

  // combine parts
  let modalEl = document.createElement('div');
  modalEl.classList.add('modal');
  modalEl.appendChild(a);
  modalEl.appendChild(divTitle);
  modalEl.appendChild(p);

  return modalEl;
}

document.addEventListener('DOMContentLoaded', () => {
  let ulEl = document.querySelector('article ul');

  ulEl.addEventListener('click', e => {
    e.preventDefault();

    let name = idElement(e.target);
    if (name) {
      let modal = makeModal(name);
      document.body.appendChild(makeBackdrop());
      document.body.appendChild(modal);
      modal.classList.add('show');
    }
  });

});