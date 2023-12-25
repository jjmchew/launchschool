console.log('test');

let main = document.querySelector('main');
let sub = document.querySelector('#sub');

main.addEventListener('contextmenu', e => {
  e.preventDefault();
  alert('main menu');
});

sub.addEventListener('contextmenu', e => {
  e.preventDefault();
  e.stopPropagation();
  alert('sub menu');
});
