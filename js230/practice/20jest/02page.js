import App from './02class.js';

console.log('page test');

document.addEventListener('DOMContentLoaded', () => {
  let li3 = document.querySelectorAll('li')[2];
  console.log(li3);

  new App();
});