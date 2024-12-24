const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let curr = l;
  let prevNode = null;
  while (curr !== null) {
    if (curr.value === k) {
      if (!prevNode) {
        l = l.next;
        curr = l;
      } else {
        prevNode.next =curr.next;
        curr = curr.next;
      }
    } else {
      prevNode = curr;
      curr = curr.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
