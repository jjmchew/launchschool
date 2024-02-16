export class Node {
  constructor(data, next) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

export function printList(head) {
  let curr = head;
  let result = "=================\n";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

export function makeLinkedList(...args) {
  let revArgs = args.toReversed();
  let prevNode = null;
  let head;
  revArgs.forEach((arg, idx) => {
    const newNode = new Node(arg, prevNode);
    prevNode = newNode;
    if (idx === args.length - 1) head = newNode;
  });
  return head;
}

// console.log(printList(makeLinkedList(1, 2, 3, 2, 4)));