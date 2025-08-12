// Created by shahbaz_athwal at 2025/08/12 04:06
// leetgo: 1.4.15
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/*
105. Construct Binary Tree from Preorder and Inorder Traversal (Medium)
Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a
binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary
tree.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

**Example 2:**

```
Input: preorder = [-1], inorder = [-1]
Output: [-1]
```

**Constraints:**

- `1 <= preorder.length <= 3000`
- `inorder.length == preorder.length`
- `-3000 <= preorder[i], inorder[i] <= 3000`
- `preorder` and `inorder` consist of **unique** values.
- Each value of `inorder` also appears in `preorder`.
- `preorder` is **guaranteed** to be the preorder traversal of the tree.
- `inorder` is **guaranteed** to be the inorder traversal of the tree.

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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;

  const root = new TreeNode(preorder[0]);
  const index = inorder.findIndex((n) => n === preorder[0]);

  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

  return root;
}

// @lc code=end
