// Created by shahbaz_athwal at 2025/08/08 22:15
// leetgo: 1.4.15
// https://leetcode.com/problems/balanced-binary-tree/

/*
110. Balanced Binary Tree (Easy)
Given a binary tree, determine if it is **height-balanced**.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)

```
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
```

**Example 3:**

```
Input: root = []
Output: true
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 5000]`.
- `-10⁴ <= Node.val <= 10⁴`

*/

// @lc code=begin

function isBalanced(root: TreeNode | null): boolean {
  function check(node: TreeNode | null): [number, boolean] {
    if (node === null) return [0, true];
    const [leftHeight, leftBal] = check(node.left);
    const [rightHeight, rightBal] = check(node.right);
    const bal =
      !leftBal || !rightBal ? false : Math.abs(leftHeight - rightHeight) <= 1;
    return [1 + Math.max(leftHeight, rightHeight), bal];
  }
  return check(root)[1];
}

// @lc code=end
