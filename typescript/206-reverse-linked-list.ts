// Created by shahbaz_athwal at 2025/08/01 23:42
// leetgo: 1.4.15
// https://leetcode.com/problems/reverse-linked-list/

/*
206. Reverse Linked List (Easy)
Given the `head` of a singly linked list, reverse the list, and return the reversed list.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

```
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**

```
Input: head = []
Output: []
```

**Constraints:**

- The number of nodes in the list is the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

**Follow up:** A linked list can be reversed either iteratively or recursively. Could you implement
both?

*/

// @lc code=begin

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// @lc code=end
