
// swap order of main / header
let main = document.body.childNodes[1];
let header = document.body.childNodes[3];
let text3 = document.body.childNodes[4];

document.body.insertBefore(header, main);
document.body.insertBefore(main, text3);



// move first h1 from main into header;
let h1_1 = document.querySelector('h1');
let nav = document.querySelector('nav');

header.insertBefore(h1_1, nav);

// clone text to insert into header (for nav)
let text = header.childNodes[0].cloneNode(true);
header.insertBefore(text, nav);



// swap image captions
let article = document.querySelector('article');
let chinStick = document.querySelectorAll('figure')[1];
let babyMop = document.querySelectorAll('figure')[0];
let chinCaption = babyMop.querySelector('figcaption');
let mopCaption = chinStick.querySelector('figcaption');

babyMop.replaceChild(mopCaption, chinCaption);
chinStick.insertBefore(chinCaption, chinStick.childNodes[3]);


// move figures into article
article.appendChild(chinStick);
article.appendChild(babyMop);
