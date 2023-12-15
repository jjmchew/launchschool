// Q1

// function delayLog() {
//   function logAfterSec(num) {
//     setTimeout(() => {
//       console.log(num);
//     }, num * 1000);
//   };

//   for (let i = 1; i <= 10; i += 1){
//     logAfterSec(i);
//   }
// }

// delayLog();



// Q2
// setTimeout(() => {     // 1
//   console.log('Once'); // 5
// }, 1000);

// setTimeout(() => {     // 2
//   console.log('upon'); // 7
// }, 3000);

// setTimeout(() => {     // 3
//   console.log('a');    // 6
// }, 2000);

// setTimeout(() => {     // 4
//   console.log('time'); // 8
// }, 4000);



// Q3
// setTimeout(() => {
//   setTimeout(() => {
//     q();
//   }, 15);

//   d();

//   setTimeout(() => {
//     n();
//   }, 5);

//   z();
// }, 10);

// setTimeout(() => {
//   s();
// }, 20);

// setTimeout(() => {
//   f();
// });

// g();

// f g   d z n   s   q   ** NOTE f g wrong
// g f d z n s q   (for 0 delay, will still execute on next event cycle)



// Q4
function afterNSeconds(callbackFn, delaySec) {
  setTimeout(callbackFn, delaySec * 1000);
}

