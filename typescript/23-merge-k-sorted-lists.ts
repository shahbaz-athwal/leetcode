// Created by shahbaz_athwal at 2025/08/04 01:39
// leetgo: 1.4.15
// https://leetcode.com/problems/merge-k-sorted-lists/

/*
23. Merge k Sorted Lists (Hard)
You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

**Example 1:**

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted linked list:
1->1->2->3->4->4->5->6
```

**Example 2:**

```
Input: lists = []
Output: []
```

**Example 3:**

```
Input: lists = [[]]
Output: []
```

**Constraints:**

- `k == lists.length`
- `0 <= k <= 10⁴`
- `0 <= lists[i].length <= 500`
- `-10⁴ <= lists[i][j] <= 10⁴`
- `lists[i]` is sorted in **ascending order**.
- The sum of `lists[i].length` will not exceed `10⁴`.

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

function mergeKLists(lists: (ListNode | null)[]): ListNode | null {}

// @lc code=end

// O(n*k)
function mergeKListsBrute(lists: (ListNode | null)[]): ListNode | null {
  let dummy = new ListNode();
  let head = dummy;

  const nulls = new Set<number>();

  while (nulls.size < lists.length) {
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < lists.length; i++) {
      if (nulls.has(i)) continue;
      if (lists[i] === null) {
        nulls.add(i);
        continue;
      }

      if (lists[i]?.val! < min) {
        min = lists[i]?.val!;
        minIndex = i;
      }
    }
    if (minIndex === -1) break;

    dummy.next = lists[minIndex];
    lists[minIndex] = lists[minIndex]?.next || null;
    dummy = dummy.next!;
  }

  return head.next;
}
