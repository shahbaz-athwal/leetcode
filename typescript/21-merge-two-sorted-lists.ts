// Created by shahbaz_athwal at 2025/08/02 01:00
// leetgo: 1.4.15
// https://leetcode.com/problems/merge-two-sorted-lists/

/*
21. Merge Two Sorted Lists (Easy)
You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes
of the first two lists.

Return the head of the merged linked list.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**

```
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**

```
Input: list1 = [], list2 = [0]
Output: [0]
```

**Constraints:**

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// @lc code=begin

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let out = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      out.next = list2;
      list2 = list2.next;
    } else {
      out.next = list1;
      list1 = list1.next;
    }
    out = out.next;
  }
  if (list1) out.next = list1;
  else out.next = list2;

  return dummy.next;
}

// @lc code=end
