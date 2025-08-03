// Created by shahbaz_athwal at 2025/08/02 18:25
// leetgo: 1.4.15
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/*
19. Remove Nth Node From End of List (Medium)
Given the `head` of a linked list, remove the `nᵗʰ` node from the end of the list and return its
head.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Example 2:**

```
Input: head = [1], n = 1
Output: []
```

**Example 3:**

```
Input: head = [1,2], n = 1
Output: [1]
```

**Constraints:**

- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

**Follow up:** Could you do this in one pass?

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0, head);
  let behind = dummy;
  let ahead = head;

  for (let i = 0; i < n; i++) {
    ahead = ahead!.next;
  }
  while (ahead) {
    ahead = ahead.next;
    behind = behind?.next!;
  }

  behind.next = behind.next!.next;

  return dummy.next;
}

// @lc code=end
