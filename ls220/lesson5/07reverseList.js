// Given the head of a linked list, reverse the list and return it.

// Input: 1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null

import { Node, printList, makeLinkedList } from './00node.js';

function reverseList(head) {
  if (!head) return head;

  let prev = null;
  let curr = head;

  while(curr) {
    let next = curr.next;
    curr.next = prev;

    // iterate counters
    prev = curr;
    curr = next;
  }

  return prev;
}


// Test code
const head = makeLinkedList(1, 2, 3, 4);

console.log('INPUT:');
console.log(printList(head));
console.log('OUTPUT');
console.log(printList(reverseList(head)));