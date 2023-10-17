function myBind(func, context) {
  return function(...args) {          // BEWARE - need `...` to collect all args into an array
    return func.apply(context, args); // BEWARE - definitely need to return the evaluated value of `func`
  };
}