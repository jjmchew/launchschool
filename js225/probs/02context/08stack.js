function newStack() {
  let stack = [];
  return {
    push(item) {
      stack.push(item);
      return item;
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(item => console.log(item));
    },
  };
}

let stack = newStack();

stack.push('1');
stack.push('2');
stack.push('3');
stack.pop();
stack.printStack();