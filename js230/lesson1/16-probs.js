// Q1
let h1 = document.querySelectorAll('h1')[0];
h1.classList.add('heading');
console.log(h1);

// Q2
let ul = document.querySelector('#list');
ul.classList.add('bulleted');

// Q3
function clickHandler(e) {
  e.preventDefault();
  let notice = document.querySelector('#notice');
  if (notice.getAttribute('class') === 'hidden') {
      notice.setAttribute('class', 'visible');
  }
  else notice.setAttribute('class', 'hidden');
}

let toggle = document.querySelector('#toggle');
toggle.onclick = clickHandler;


// Q4
// continued from Q3
document.querySelector('#notice').onclick = clickHandler;

// Q5
let multiplication = document.querySelector('#multiplication');
multiplication.textContent = '117';

// Q6
document.body.setAttribute("id", 'styled');

