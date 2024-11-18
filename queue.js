/** Node: node for a queue. 
 * Simple class representing each element in the queue
 * with a value and pointer to next node
 */
class Node {
  constructor(val) {
    this.val = val;    // Stores the actual value
    this.next = null;  // Reference to next node, null by default
  }
}

/** Queue: implements a FIFO (First In, First Out) data structure
 * using a linked list implementation with head (first) and tail (last) pointers
 */
class Queue {
  constructor() {
    this.first = null;  // Points to front of queue (for dequeue)
    this.last = null;   // Points to back of queue (for enqueue)
    this.size = 0;      // Tracks number of elements in queue
  }

  /** enqueue(val): adds new value to end of queue
   * Time complexity: O(1) - constant time operation
   */
  enqueue(val) {
    let node = new Node(val);

    if (!this.first) {
      // If queue is empty, set both first and last to new node
      this.first = node;
      this.last = node;
    } else {
      // Add to end of existing queue
      this.last.next = node;  // Connect current last to new node
      this.last = node;       // Update last pointer
    }

    this.size++;
  }

  /** dequeue(): removes and returns value from start of queue
   * Time complexity: O(1) - constant time operation
   * Throws error if queue is empty
   */
  dequeue() {
    if (!this.first) throw new Error("Can't dequeue from an empty queue.");

    let temp = this.first;
    if (this.first == this.last) {
      // If removing last item, set last to null
      this.last = null;
    }
    this.first = this.first.next;  // Move first pointer to next node
    this.size--;
    return temp.val;
  }

  /** peek(): returns value at front of queue without removing it
   * Time complexity: O(1) - constant time operation
   */
  peek() {
    return this.first.val;  // Should add error handling for empty queue
  }

  /** isEmpty(): checks if queue has any elements
   * Time complexity: O(1) - constant time operation
   */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
