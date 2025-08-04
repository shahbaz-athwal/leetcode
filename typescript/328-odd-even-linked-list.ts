// Created by shahbaz_athwal at 2025/08/04 00:45
// leetgo: 1.4.15
// https://leetcode.com/problems/odd-even-linked-list/

/*
328. Odd Even Linked List (Medium)
Given the `head` of a singly linked list, group all the nodes with odd indices together followed by
the nodes with even indices, and return the reordered list.

The **first** node is considered **odd**, and the **second** node is **even**, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the
input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg)

```
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg)

```
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
```

**Constraints:**

- The number of nodes in the linked list is in the range `[0, 10⁴]`.
- `-10⁶ <= Node.val <= 10⁶`

*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// @lc code=begin

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let even = head.next;
  let odd = head;
  let evenStart = even;

  while (even && even.next) {
    const tmp = even.next;
    even.next = even.next.next;
    odd.next = tmp;
    even = even.next!;
    odd = odd.next;
  }

  odd.next = evenStart;

  return head;
}

// @lc code=end
