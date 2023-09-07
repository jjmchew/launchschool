function someFunc(args) {
  let first = args[0];
  let last = args[args.length - 1];
  let middle = args.slice(1, args.length - 1).sort();
  return {
    first,
    middle,
    last,
  };
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let {first, last, middle} = someFunc(array);

console.log(first);
console.log(middle);
console.log(last);



