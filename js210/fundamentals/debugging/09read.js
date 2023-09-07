const totalPages = 364;
let energy = 100;
let currentPage = 1; // added

function read() {
//  let currentPage = 1;

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();

/*
The `read` function is invoked within the `read` function recursively. However, there is no exit condition since `energy` is reset to 100 and `currentPage` is reset to `1` within each invocation of `read`. Hence, the function recursively calls itself until the maximum call stack size is reached.
If currentPage is defined with a global scope, rather than within the function `read`, the program will function more as expected.
*/
