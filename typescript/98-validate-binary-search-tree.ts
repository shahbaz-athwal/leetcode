// Created by shahbaz_athwal at 2025/08/06 19:17
// leetgo: 1.4.15
// https://leetcode.com/problems/validate-binary-search-tree/

/*
98. Validate Binary Search Tree (Medium)
Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A **valid BST** is defined as follows:

- The left subtree of a node contains only nodes with keys **strictly less than** the node's key.
- The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)

```
Input: root = [2,1,3]
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg)

```
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10⁴]`.
- `-2³¹ <= Node.val <= 2³¹ - 1`

*/
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

function isValidBST(root: TreeNode | null): boolean {
  function valid(node: TreeNode | null, leftBound: number, rightBound: number) {
    if (node === null) return true;
    if (node.val <= leftBound || node.val >= rightBound) return false;
    return (
      valid(node.left, leftBound, node.val) &&
      valid(node.right, node.val, rightBound)
    );
  }
  return valid(root, -Infinity, Infinity);
}

// @lc code=end
