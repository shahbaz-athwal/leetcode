// Created by shahbaz_athwal at 2025/08/01 00:54
// leetgo: 1.4.15
// https://leetcode.com/problems/min-stack/

/*
155. Min Stack (Medium)
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

**Example 1:**

```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

**Constraints:**

- `-2³¹ <= val <= 2³¹ - 1`
- Methods `pop`, `top` and `getMin` operations will always be called on **non-empty** stacks.
- At most `3 * 10⁴` calls will be made to `push`, `pop`, `top`, and `getMin`.

*/

// @lc code=begin

class MinStack {
  stack: number[];

  min: number[];
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val: number): void {
    this.stack.push(val);
    this.min.push(
      Math.min(
        this.min.length === 0 ? Infinity : this.min[this.min.length - 1],
        val
      )
    );
  }

  pop(): void {
    this.stack.pop();
    this.min.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }
}

// @lc code=end
