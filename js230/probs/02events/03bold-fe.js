const CUSTOM_EVENT = 'addHighlight';

function makeBold(element) {
  element.style.fontWeight = 'bold';
  element.dispatchEvent(new CustomEvent(CUSTOM_EVENT, {
    detail: {
      className: 'highlight',
    },
  }));
}

let sectionElement = document.querySelector('section');
sectionElement.addEventListener(CUSTOM_EVENT, e => {
  e.target.classList.add(e.detail.className);
})
makeBold(sectionElement);


console.log(sectionElement.classList.contains('highlight'));
// true

console.log(sectionElement.style.fontWeight);
// "bold"
