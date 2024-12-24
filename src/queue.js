const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  list = undefined;
  size = 0;

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    const newNode = new ListNode(value)
    if (!this.list) {
      this.list = newNode;
    } else {
      let current = this.list;
      while (current.next) {
        current = current.next
      }
      current.next = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    if (this.size) {
      const tempNode = this.list;
      this.list = this.list.next;
      this.size -= 1;
      return tempNode.value;
    } else {
      throw new Error("empty queue!");
    }
  }
}

module.exports = {
  Queue
};
