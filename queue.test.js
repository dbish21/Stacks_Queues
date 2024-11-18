const Queue = require("./queue");

let queue;

// Reset the queue before each test to ensure a clean state
beforeEach(function() {
  queue = new Queue();
});

describe("enqueue", function() {
  it("places the value at the end of the queue and returns undefined", function() {
    // Test 1: First element should be both first and last
    expect(queue.enqueue(10)).toBe(undefined);
    expect(queue.first.val).toBe(10);
    expect(queue.last.val).toBe(10);

    // Test 2: Second element becomes last, first stays the same
    queue.enqueue(100);
    expect(queue.first.val).toBe(10);
    expect(queue.last.val).toBe(100);

    // Test 3: Third element becomes last, first stays the same
    queue.enqueue(1000);
    expect(queue.first.val).toBe(10);
    expect(queue.last.val).toBe(1000);
  });
});

describe("dequeue", function() {
  it("returns the value of the node removed", function() {
    // Setup: Add three elements to queue
    queue.enqueue(10);
    queue.enqueue(100);
    queue.enqueue(1000);

    // Test 1: Remove first element and verify return value
    let removed = queue.dequeue();
    expect(removed).toBe(10);
    expect(queue.size).toBe(2);

    // Test 2: Remove remaining elements and verify size
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  it("throws an error if the queue is empty", function() {
    // Verify error handling for empty queue
    expect(() => queue.dequeue()).toThrow(Error);
  });
});

describe("peek", function() {
  it("returns the value at the start of the queue", function() {
    // Test 1: Peek at single element
    queue.enqueue(3);
    expect(queue.peek()).toBe(3);

    // Test 2: Peek should still return first element after adding more
    queue.enqueue(5);
    expect(queue.peek()).toBe(3);
  });
});

describe("isEmpty", function() {
  it("returns true for empty queues", function() {
    // Verify new queue is empty
    expect(queue.isEmpty()).toBe(true);
  });

  it("returns false for nonempty queues", function() {
    // Verify queue is not empty after adding element
    queue.enqueue(3);
    expect(queue.isEmpty()).toBe(false);
  });
});
