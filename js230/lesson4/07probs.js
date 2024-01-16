// Code for each problem was cut and paste into Chrome snippets to run on 07index.html page

// Problem 1
let $h1s = $('h1');
$h1s.addClass('highlight');


// Problem 2
let $firstH1 = $('#site_title');
$firstH1.addClass('highlight');


// Problem 3
// let $articleLis = $('article').find('li'); // my solution
let $articleLis = $('article li');
$articleLis.addClass('highlight');


// Problem 4
let $thirdArticleLi = $('article li').eq(2);
$thirdArticleLi.addClass('highlight');


// Problem 5
let $table = $('table');
$('table tr').odd().addClass('highlight');  // LS solution
$table.find('tr').odd().addClass('highlight'); // my solution


// Problem 6
let $p6 = $('li:contains("ac ante")').parents('li');
// this solution does not need 'li li:contains("ac ante")' since there is
// only 1 desired parent
$p6.addClass('highlight');


// Problem 7
let $p7 = $('li li:contains("ac ante")').next();
$p7.addClass('highlight');
// this problem needs the "li li:contains..." since technically
// the outer li also contains the text 'ac ante'
// - to specifically select the innermost li, requires "li li"


// Problem 8
let $p8 = $('table td').last();
$p8.addClass('highlight');


// Problem 9
let $p9 = $('table td:not(".protected")');
$p9.addClass('highlight');


// Problem 10
let $p10 = $('a[href^="#"]');
$p10.addClass('highlight');


// Problem 11
let $p11 = $('[class*="block"]');
$p11.addClass('highlight');