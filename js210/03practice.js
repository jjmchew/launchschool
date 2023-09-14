// Question 1
//let title = "The Three-Body Problem";  // should use single quotes for strings
// let title = 'The Three-Body Problem';


// Question 2
let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;  // variables should be camelCase
// Should NOT do multiple variable declarations with a single 'let'
// let title = 'The Three-Body Problem';
// let author = 'Cixin Liu';
// let pageCount = 400;


// Question 3
let completed = lastPageRead == 400; // use the `===`
// let completed = lastPageRead === 400;


// Question 4
if (finishedBook())
  console.log('You have finished reading this book'); // use `{}` on multiline ifs
// if (finishedBook()) {
//   console.log(...);
// }


// Question 5
function read(pages) {                        // prefer use of named function expressions
      console.log('You started reading.');    // use 2 spaces for indent
      for (let page=0; page<pages; page++) {  // spaces between operators, don't use `++`
              let message = 'You read page '+page;  // use explicit coercion
              console.log(message);
      }
}

read(400);
/*  // use of block quotes is actually bad, as well
let read = function displayPagesReadMessages(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
};

read(400);
*/

