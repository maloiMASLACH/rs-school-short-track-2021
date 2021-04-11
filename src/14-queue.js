const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.stack = [];
  }

  get size() {
    return this.stack.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    node.next = null;
    this.stack.push(element);
  }

  dequeue() {
    return this.stack.shift();
  }
}
module.exports = Queue;
