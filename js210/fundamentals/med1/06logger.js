function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*
This code logs 'debugging'.
Code execution begins when the function `debugIt` is invoked on line 10.
The function `debugIt` contains a constant declaration and assignment on line 2 and then a declaration for function `logger` on lines 3 - 5.
Then, on line 7, the (local) function `logger` is invoked.
The `logger` function invokes `console.log` and passes the value of constant `status`, which is declared in a scope outside of the function, but available inside the scope of the function. Hence, the string value `debugging` assigned to the constant `status` is output to the screen.
*/
