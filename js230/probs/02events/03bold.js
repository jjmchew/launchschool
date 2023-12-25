function makeBold(element, callback) {
  element.style.fontWeight = 'bold';
  callback(element);
}

document.addEventListener('DOMContentLoaded', () => {
  let sectionElement = document.querySelector('section');
  makeBold(sectionElement, function(elem) {
    elem.classList.add('highlight');
  });
  
  console.log(sectionElement.classList.contains('highlight'));
  // true
  
  console.log(sectionElement.style.fontWeight);
  // "bold"
});