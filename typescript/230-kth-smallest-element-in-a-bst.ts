// Created by shahbaz_athwal at 2025/08/11 02:24
// leetgo: 1.4.15
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/*
230. Kth Smallest Element in a BST (Medium)
Given the `root` of a binary search tree, and an integer `k`, return the `kᵗʰ`smallest value ( **1-
indexed**) of all the values of the nodes in the tree.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg)

```
Input: root = [3,1,4,null,2], k = 1
Output: 1
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg)

```
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```

**Constraints:**

- The number of nodes in the tree is `n`.
- `1 <= k <= n <= 10⁴`
- `0 <= Node.val <= 10⁴`

**Follow up:** If the BST is modified often (i.e., we can do insert and delete operations) and you
need to find the kth smallest frequently, how would you optimize?

*/

// @lc code=begin

function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let count = 0;
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    count++;
    if (count === k) return curr.val;
    curr = curr.right;
  }
}

// @lc code=end
