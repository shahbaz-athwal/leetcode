// Created by shahbaz_athwal at 2025/08/02 03:34
// leetgo: 1.4.15
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/*
83. Remove Duplicates from Sorted List (Easy)
Given the `head` of a sorted linked list, delete all duplicates such that each element appears only
once. Return the linked list **sorted** as well.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)

```
Input: head = [1,1,2]
Output: [1,2]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)

```
Input: head = [1,1,1,1,2,3,3]
Output: [1,2,3]
```

**Constraints:**

- The number of nodes in the list is in the range `[0, 300]`.
- `-100 <= Node.val <= 100`
- The list is guaranteed to be **sorted** in ascending order.

*/

// @lc code=begin

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let curr = head;
  const out = head;
  while (curr) {
    if (curr.val === curr.next?.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return out;
}

// @lc code=end
