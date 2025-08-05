// Created by shahbaz_athwal at 2025/08/05 00:36
// leetgo: 1.4.15
// https://leetcode.com/problems/reorder-list/

/*
143. Reorder List (Medium)
You are given the head of a singly linked-list. The list can be represented as:

```
L₀ → L₁ → … → Lₙ ₋ ₁ → Lₙ
```

Reorder the list to be on the following form:

```
L₀ → Lₙ → L₁ → Lₙ ₋ ₁ → L₂ → Lₙ ₋ ₂ → …
```

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg)

```
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg)

```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```

**Constraints:**

- The number of nodes in the list is in the range `[1, 5 * 10⁴]`.
- `1 <= Node.val <= 1000`

*/

// ListNode class for singly-linked list
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=begin

function reorderList(head: ListNode | null): void {
  let slow = head!;
  let fast = head!.next;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;
  let prev: ListNode | null = null;

  while (second) {
    const tmp = second.next;
    second.next = prev;
    prev = second;
    second = tmp;
  }

  second = prev;

  while (head && second) {
    const headTmp = head!.next;
    const tailTmp = second!.next;
    head.next = second;
    second.next = headTmp;
    head = headTmp;
    second = tailTmp;
  }
}

// @lc code=end
