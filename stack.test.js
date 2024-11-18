const Stack = require("./stack");

let stack;

// Reset the stack before each test to ensure a clean state
beforeEach(function() {
  stack = new Stack();
});

describe("push", function() {
  it("places the value at the top of the stack and returns undefined", function() {
    // Test 1: First element should be both first and last
    expect(stack.push(10)).toBe(undefined);
    expect(stack.first.val).toBe(10);
    expect(stack.last.val).toBe(10);

    // Test 2: New element becomes first (top), last remains unchanged
    stack.push(100);
    expect(stack.first.val).toBe(100);
    expect(stack.last.val).toBe(10);

    // Test 3: Another push - new element on top, bottom unchanged
    stack.push(1000);
    expect(stack.first.val).toBe(1000);
    expect(stack.last.val).toBe(10);
  });
});

describe("pop", function() {
  it("returns the value of the node removed", function() {
    // Setup: Add three elements to stack (10 at bottom, 1000 at top)
    stack.push(10);
    stack.push(100);
    stack.push(1000);

    // Test 1: Remove top element and verify return value
    var removed = stack.pop();
    expect(removed).toBe(1000);
    expect(stack.size).toBe(2);

    // Test 2: Remove remaining elements and verify size
    stack.pop();
    stack.pop();
    expect(stack.size).toBe(0);
  });

  it("throws an error if the stack is empty", function() {
    // Verify error handling for empty stack
    expect(() => stack.pop()).toThrow(Error);
  });
});

describe("peek", function() {
  it("returns the value at the start of the stack", function() {
    // Test 1: Peek at single element
    stack.push(3);
    expect(stack.peek()).toBe(3);

    // Test 2: Peek should return new top element after push
    stack.push(5);
    expect(stack.peek()).toBe(5);
  });
});

describe("isEmpty", function() {
  it("returns true for empty stacks", function() {
    // Verify new stack is empty
    expect(stack.isEmpty()).toBe(true);
  });

  it("returns false for nonempty stacks", function() {
    // Verify stack is not empty after adding element
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
  });
});
