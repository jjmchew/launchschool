// Q1
function basicCallback(cb, number) {
  setTimeout(() => cb(number), 2000);
}

// basicCallback( number => console.log(number * 2), 5);


// Q2
function downloadFile(callback) {
  console.log('Downloading file...');
  setTimeout(() => { callback('Download complete!'); }, 1500);
}

// downloadFile((msg)=>console.log(msg));


// Q3
function processData(array, callback) {
  setTimeout(() => {
    array.forEach(callback);
  }, 1000);
}

// processData([1, 2, 3], (num) => console.log(num * 2));


// Q4
function waterfallOverCallbacks(functs, start) {
  let result = start;
  functs.forEach(fct => result = fct(result));
  console.log(result);
}

const double = x => x * 2;
// waterfallOverCallbacks([double, double, double], 1);


// Q5
function startCounter(callback) {
  let count = 1;

  let int = setInterval(() => {
    let finish = callback(count);
    if (finish) clearInterval(int);
    count += 1;
  }, 1000);
}

startCounter( count => {
  console.log(count);
  return count === 5;
});

