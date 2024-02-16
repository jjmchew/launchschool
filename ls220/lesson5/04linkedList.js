class Node {
  constructor(data, next) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

// #region Version 1 (without use of dummy node)
// function deleteFromLinkedList(head, target) {
//   let prev = null;
//   let curr = head;

//   if (!head) return head;

//   while (curr) {
//     if (curr.val !== target) {
//       prev = curr;
//     } else {
//       if (prev) prev.next = curr.next;
//       else head = curr.next;
//     }
//     curr = curr.next;
//   }

//   return head;
// }
// #endregion

// #region Version 2 (with use of dummy node)
function deleteFromLinkedList(head, target) {
  let curr = head;
  let dummy = new Node(null, head);
  let prev = dummy;

  if (!head) return head;

  while(curr) {
    if (curr.val === target) {
      prev.next = curr.next;
    }
    else prev = curr;

    curr = curr.next;
  }
  return dummy.next;
}
// #endregion


// Helper function to print the linked list
function printList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}


// Test case 1
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(2);
head1.next.next.next.next = new Node(4);

console.log("Input: 1 -> 2 -> 3 -> 2 -> 4 -> null");
console.log("Target: 2");
console.log("Output:", printList(deleteFromLinkedList(head1, 2)));
// Output: 1 -> 3 -> 4

// Test case 2
const head2 = new Node(1);
head2.next = new Node(3);
head2.next.next = new Node(1);

console.log("Input: 1 -> 3 -> 1");
console.log("Target: 1");
console.log("Output:", printList(deleteFromLinkedList(head2, 1)));
// Output: 3 -> null


// Test case 3
const head3 = new Node(1);
head3.next = new Node(1);
head3.next.next = new Node(3);
head3.next.next.next = new Node(1);
head3.next.next.next.next = new Node(2);
console.log('Input: ', printList(head3));
console.log('Target: 1');
console.log('Output:', printList(deleteFromLinkedList(head3, 1)));
// Output: 3 -> 2 -> null


