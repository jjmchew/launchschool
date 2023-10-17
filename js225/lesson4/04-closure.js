// Problem 1
// function makeCounterLogger(startNum) {
//   return function (finishNum) {
//     if (finishNum > startNum) {
//       for (let i = startNum; i <= finishNum; i += 1) {
//         console.log(i);
//       }
//     } else {
//       for (let i = startNum; i >= finishNum; i -= 1) {
//         console.log(i);
//       }
//     }
//   };
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// /*
// 5
// 6
// 7
// 8
// */
// countlog(2);
// /*
// 5
// 4
// 3
// 2
// */




// Problem 2
function makeList() {
  let list = [];
  let isInList = givenItem => {
    return list.filter(item => item === givenItem).length !== 0;
  };

  return function (arg) {
    if (arg === undefined) {
      if (list.length === 0) console.log ('The list is empty.');
      else {
        list.forEach(item => console.log(item));
      }
    } else if (isInList(arg)) {
      list = list.filter(item => item !== arg);
      console.log(`${arg} removed!`);
    } else {
      list.push(arg);
      console.log(`${arg} added!`);
    }
  };
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book