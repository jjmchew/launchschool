console.log('handlebars test');

document.addEventListener('DOMContentLoaded', () => {
  let templateHTML = document.querySelector('#template').innerHTML;
  let template = Handlebars.compile(templateHTML);

  document.querySelector('#inventory').innerHTML = template({id: 3});
});