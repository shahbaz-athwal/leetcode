// Created by shahbaz_athwal at 2025/08/08 21:57
// leetgo: 1.4.15
// https://leetcode.com/problems/binary-tree-level-order-traversal/

/*
102. Binary Tree Level Order Traversal (Medium)
Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e.,
from left to right, level by level).

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

**Example 2:**

```
Input: root = [1]
Output: [[1]]
```

**Example 3:**

```
Input: root = []
Output: []
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 2000]`.
- `-1000 <= Node.val <= 1000`

*/

// @lc code=begin

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const out: number[][] = [];
  const q: TreeNode[] = [root];

  while (q.length > 0) {
    const size = q.length;
    const sub: number[] = [];

    for (let i = 0; i < size; i++) {
      const curr = q.shift()!;
      sub.push(curr.val);

      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    out.push(sub);
  }
  return out;
}

// @lc code=end
