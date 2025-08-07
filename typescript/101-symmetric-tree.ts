// Created by shahbaz_athwal at 2025/08/07 03:28
// leetgo: 1.4.15
// https://leetcode.com/problems/symmetric-tree/

/*
101. Symmetric Tree (Easy)
Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around
its center).

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg)

```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg)

```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 1000]`.
- `-100 <= Node.val <= 100`

**Follow up:** Could you solve it both recursively and iteratively?

*/
// Definition for a binary tree node
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=begin

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  const queue = [root.left, root.right];

  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left, right.right, left.right, right.left);
  }

  return true;
}
// @lc code=end
