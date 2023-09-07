let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

/*
[1, 2, 10]

The function `myValue` mutates the array passed in as an argument.
In this case, the array referenced by variable `a` is passed in, and then the 3rd element is re-assigned to be 10 more than it's original value, 3.
Hence, when console.log is invoked, the output to the screen is the updated values within the array: [1, 2, 10].
*/
