let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/*
This program will get 'stuck' at i = 0, since (i % 3) evaluates to 0 and `i` is never incremented further.
Incrementing `i` should not be part of an `else` block.
Also, if `0` is not considered a multiple of 3, then the conditional expression used for the `if` statement should be:
`i % 3 === 0 && i !== 0` to exclude the case that `i === 0`.
*/
